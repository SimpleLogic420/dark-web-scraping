import React, { FormEvent } from "react";
import { FullPasteType, Alert } from "../../types/paste";
import axios from "axios";
import "./keyword.scss";

interface props {
  keywords: string[];
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  
  setAlerts: React.Dispatch<React.SetStateAction<Alert[]>>;
  alerts: Alert[];
  notifications: string[];
  setNotifications: React.Dispatch<React.SetStateAction<string[]>>;
  newAlerts: number;
  setNewAlerts: React.Dispatch<React.SetStateAction<number>>;
}

function KeyWord({
  keywords,
  setKeywords,
  setAlerts,
  alerts,
  setNewAlerts,
  newAlerts,
  notifications,
  setNotifications,
}: props) {
  const handleKeywords = (e: FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    const keywordInputValue: string =document.getElementById("keywordsInput").value;
    const tempoKeywordsArray: string[] = [...keywords];
    tempoKeywordsArray.push(keywordInputValue);
    setKeywords(tempoKeywordsArray);
    searchKeywords();
    setInterval(() => {
      searchKeywords();
    }, 120000);
  };

  const searchKeywords = async () => {
    const pastelistRes = new EventSource(
      "http://localhost:3010/list/scrape-once"
    );
    pastelistRes.onmessage = (event) => {
      const dbpastelist = JSON.parse(event.data).pastes;
      for (let key of keywords) {
        for (let paste of dbpastelist) {
          if (paste.title.toLowerCase().includes(key.toLowerCase())) {
            const newAlert = {
              title: `your keyword {${key}} has been found in one of our pastes title!\n\n`,
              content: `title: ${paste.title}\n\n`,
              details: `look for it by its upload time : ${paste.date}`,
            };
            if (alerts.includes(newAlert)) {
              continue;
            }
            const tempoAlertsArray = [...alerts];
            tempoAlertsArray.push(newAlert);
            setAlerts(tempoAlertsArray);
            const tempoNotif: string[] = notifications;
            const date = new Date();
            tempoNotif.unshift(
              newAlert.title +
                formatDateTo_DD_MM_YYYY(date) +
                " " +
                date.getHours() +
                ":" +
                date.getMinutes()
            );
            setNotifications(tempoNotif);
            setNewAlerts((newAlerts) => newAlerts + 1);
            return;
          }
          if (paste.content.toLowerCase().includes(key.toLowerCase())) {
            const newAlert = {
              title: `your keyword {${key}} has been found in one of our pastes content!\n\n`,
              content: `content: ${paste.content}\n\n`,
              details: `look for it by its upload time : ${paste.date}`,
            };
            if (alerts.includes(newAlert)) {
              continue;
            }
            const tempoAlertsArray = [...alerts];
            tempoAlertsArray.push(newAlert);
            setAlerts(tempoAlertsArray);
            const tempoNotif: string[] = notifications;
            tempoNotif.unshift(newAlert.title);
            setNotifications(tempoNotif);
            setNewAlerts((newAlerts) => newAlerts + 1);
            return;
          }
          pastelistRes.onerror = (event) => {
            console.log(event.type);
          };
        }
      }
    };
  };
  // @ts-ignore
  const deleteKeyword = (e) => {
    const keyWordElement = e.target.closest("li");
    const desiredText = keyWordElement.children[0].innerHTML;
    for (let i = 0; i < keywords.length; i++) {
      if (keywords[i] === desiredText) {
        const tempoKeywords = [...keywords];
        tempoKeywords.splice(i, 1);
        setKeywords(tempoKeywords);
      }
    }
  };
  function formatDateTo_DD_MM_YYYY(date: Date) {
    //duplicated for lack of time ,(barchart)
    let dateStr = date.toString();
    let date1 = dateStr.substring(4, 16);
    const rightFormatDate =
      date1.split(" ")[1] +
      " " +
      date1.split(" ")[0] +
      " " +
      date1.split(" ")[2];
    return rightFormatDate;
  }
  return (
    <div className="keywordsPage">
      <h1 className="keywordsTitle">Key Words</h1>
      <p className="keywordDescription">
        Choose words you want to find in our pastes and when theres a match we
        will alert you
      </p>
      <form action="submit" className="keywordsForm">
        <input
          type="text"
          placeholder="Choose keywords"
          className="keywordsInput"
          id="keywordsInput"
        />
        <button
          type="submit"
          className="keywordsBtn"
          onClick={(e) => {
            handleKeywords(e);
          }}
        >
          Add Keyword
        </button>
      </form>
      <ul className="keywordsList">
        {keywords.map((keyword, i) => {
          return (
            <li key={i} className="keywordBox">
              <strong>{keyword}</strong>
              <button
                onClick={(e) => deleteKeyword(e)}
                className="deleteKeyword"
                id="deleteKeyword"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default KeyWord;
