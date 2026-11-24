# FAE / 設備工程師必備常識知識庫

> 給想進入半導體與電子產業「應用與製造端」的工程師：**FAE、設備工程師（EE）、原廠 CE、測試 / 產品工程師、CIM / EAP 工程師**。公司內部流程是機密，本站只整理**公開且通用**的原理、產業標準（JEDEC、IEC、SEMI、AEC）與方法論，也就是面試真正會考的內容。

## 閱讀方式

- 難度：🟢 基礎（入門必懂）｜🟡 進階（能獨立負責）｜🔴 高階（趨勢與決策）
- 每章結構：**一句話重點 → 學習目標 → 核心觀念（含流程圖）→ 動手練習 → 面試常問（附參考解答）→ 常見誤解 → 本章回顧**
- 面試題建議**先自己回答，再展開解答對照**（網站上解答預設收合）
- 軟體與韌體基礎請參考姊妹站 [SWEMindset](https://wyc915.github.io/SWEMindset/)

## 章節目錄

### 總覽

| # | 章節 | 一句話 |
|---|---|---|
| 01 | [硬體相關職涯總覽](01-career-overview.md) | FAE、設備、測試、CIM 的差異與台灣雇主地圖 |

### FAE 軌

| # | 章節 | 一句話 |
|---|---|---|
| 02 | [FAE 技術基本功](02-fae-technical-foundation.md) | 電源、時脈、訊號完整性、ESD、散熱與量測 |
| 03 | [FAE 實戰](03-fae-business-support.md) | Design-Win 流程、客訴、FA、8D、可靠度 |
| 04 | [電源 IC 實務](04-fae-power-ic.md) | Buck 設計計算、控制架構、迴路穩定、常見客訴 |
| 05 | [無線晶片實務](05-fae-wireless.md) | Wi-Fi / 藍牙、RF 指標、天線、認證、共存與 Desense |
| 06 | [車用 MCU 實務](06-fae-automotive-mcu.md) | CAN、ISO 26262、車用資安、AUTOSAR、UDS |

### 設備與製造軌

| # | 章節 | 一句話 |
|---|---|---|
| 07 | [半導體製程與設備原理](07-semiconductor-process-equipment.md) | 各站製程、真空、電漿、RF、晶圓傳送 |
| 08 | [設備工程實務](08-equipment-engineering-practice.md) | E10、MTBF、SPC / Cpk、SECS/GEM、工安 |
| 09 | [蝕刻機台](09-etch-equipment.md) | 電漿機制、CCP / ICP、Edge Ring、參數與警報 |
| 10 | [薄膜沉積機台](10-thin-film-equipment.md) | CVD、PVD、ALD、磊晶、電鍍、前驅物輸送 |
| 11 | [CMP 機台](11-cmp-equipment.md) | Preston 方程式、耗材管理、碟化、刮傷、腐蝕 |
| 12 | [先進封裝設備](12-advanced-packaging-equipment.md) | TSV、薄化、切割、TCB、混合鍵合、翹曲 |
| 13 | [測試與產品工程師](13-test-product-engineering.md) | ATE、CP / FT、DFT、Wafer Map 與良率分析 |

### 面試準備

| # | 章節 | 一句話 |
|---|---|---|
| 14 | [面試準備](14-interview-preparation.md) | 流程、履歷轉換、自介範本、STAR、各職位情境題 |

### 附錄

| # | 章節 | 一句話 |
|---|---|---|
| — | [名詞速查](glossary.md) | 常見縮寫一句話解釋 |

## 學習路線

| 階段 | 目標 | 對應章節 |
|---|---|---|
| 一、定位 | 選定 FAE、設備、測試或 CIM 方向 | [01](01-career-overview.md) |
| 二、FAE 基本功 | 能量測、除錯、支援客戶到量產 | [02](02-fae-technical-foundation.md)、[03](03-fae-business-support.md) |
| 三、FAE 產品線 | 依目標公司選讀 | [04](04-fae-power-ic.md) 電源、[05](05-fae-wireless.md) 無線、[06](06-fae-automotive-mcu.md) 車用 |
| 四、設備 / CIM 基本功 | 懂製程與設備子系統、會用數據改善 | [07](07-semiconductor-process-equipment.md)、[08](08-equipment-engineering-practice.md) |
| 五、設備模組 | 依目標模組選讀 | [09](09-etch-equipment.md) 蝕刻、[10](10-thin-film-equipment.md) 薄膜、[11](11-cmp-equipment.md) CMP、[12](12-advanced-packaging-equipment.md) 先進封裝 |
| 六、測試 / 產品 | 懂測試流程、會分析良率數據 | [07](07-semiconductor-process-equipment.md)、[13](13-test-product-engineering.md) |
| 七、求職 | 履歷、自介、行為題與情境題 | [14](14-interview-preparation.md) |

> 軟體背景（如 .NET / SQL）最直接的入口是 **CIM / EAP 工程師**（[08](08-equipment-engineering-practice.md)）與**測試 / 產品工程師**（[13](13-test-product-engineering.md)）；FAE 則需先補電子學與量測（[02](02-fae-technical-foundation.md)，基礎可參考 [SWEMindset 第 21 章](https://wyc915.github.io/SWEMindset/chapters/21-mcu-hardware)）。
