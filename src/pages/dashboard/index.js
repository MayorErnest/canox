import React from "react";
import {
  ada,
  ArrowDown,
  barcode,
  HeaderSpecial,
  logo,
  logoSimple,
  DashboardIcon,
} from "../../assets";

import { Inputs, Dropdown } from "../../components";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./styles.module.css";

const Dashboard = () => {
  return (
    <main className={`${styles.container}`}>
      <div>
        <div className="row g-0">
          <div className={`${styles.sidebar} d-none  d-xl-block col-2`}>
            <div className={`${styles["header-special"]}`}>
              <div className="py-3"></div>
              <div>
                <HeaderSpecial />
              </div>
            </div>
            <nav className="mt-4">
              <ul>
                <li>
                  <div
                    className={`${styles.dashnav} p-4 text-center d-flex align-items-center`}
                  >
                    <DashboardIcon className={styles["dashboard-icon"]} />
                    <span>Dashboard</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-xl-10">
            <header className="py-3">
              <img src={logo} alt="" className="ms-4" />
            </header>
            <div className="container pb-5">
              <div className="row px-2 px-lg-0 ps-lg-4 g-4">
                <div className="mt-5">
                  <button
                    className={`${styles["dashboard-btn"]} d-block py-3 px-5`}
                  >
                    Dashboard
                  </button>
                </div>
                <div className="col-12 col-lg-7 col-xl-8">
                  <div className="row">
                    <div className="col-12 col-xl-4">
                      <div
                        className={`${styles["stats-box-1"]} py-2 px-4 h-100`}
                      >
                        <p>Sales Progress</p>
                        <div className={`${styles["percent-circle"]}`}>
                          <CircularProgressbar
                            value={13}
                            text={`${13}%`}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                              textColor: "#7a84f7",
                              pathColor: "#f6bf5a",
                              trailColor: "#7a84f7",
                            })}
                          />
                        </div>
                        <div className="mt-3">
                          <span className="me-3">Completed</span>
                          <span>Progress</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mt-xl-0 col-xl-8">
                      <div
                        className={`${styles["stats-box-2"]} py-4 px-4 mb-3`}
                      >
                        <span>Token Allocation for this Round</span>
                        <h1 className="fw-bold mt-3">50,000,000</h1>
                      </div>
                      <div className={`${styles["stats-box-3"]} py-4 px-4`}>
                        <div className="d-flex flex-wrap  align-items-center text-center">
                          <div className="me-3">Ends in:</div>
                          <div
                            className={`${styles["stats-circle"]} ms-2 mt-2 mt-lg-0 ms-xl-0`}
                          >
                            <CircularProgressbarWithChildren
                              value={4}
                              maxValue={31}
                              strokeWidth={2}
                              styles={buildStyles({
                                strokeLinecap: "",
                                textColor: "#fff",
                                textSize: "12px",
                                pathColor: "#fff",
                                trailColor: "#d9d5d4",
                              })}
                            >
                              <span>4</span>
                              <span>Days</span>
                            </CircularProgressbarWithChildren>
                          </div>
                          <div
                            className={`${styles["stats-circle"]} ms-2 mt-2 mt-lg-0 ms-xl-0`}
                          >
                            <CircularProgressbarWithChildren
                              value={8}
                              maxValue={24}
                              strokeWidth={2}
                              styles={buildStyles({
                                strokeLinecap: "",
                                textColor: "#fff",
                                textSize: "12px",
                                pathColor: "#fff",
                                trailColor: "#d9d5d4",
                              })}
                            >
                              <span>8</span>
                              <span>Hours</span>
                            </CircularProgressbarWithChildren>
                          </div>
                          <div
                            className={`${styles["stats-circle"]} ms-2 mt-2 mt-lg-0 ms-xl-0`}
                          >
                            <CircularProgressbarWithChildren
                              value={15}
                              maxValue={60}
                              strokeWidth={2}
                              styles={buildStyles({
                                strokeLinecap: "",
                                textColor: "#fff",
                                textSize: "12px",
                                pathColor: "#fff",
                                trailColor: "#d9d5d4",
                              })}
                            >
                              <span>15</span>
                              <span>Minutes</span>
                            </CircularProgressbarWithChildren>
                          </div>
                          <div
                            className={`${styles["stats-circle"]} ms-2 mt-2 mt-lg-0 ms-xl-0`}
                          >
                            <CircularProgressbarWithChildren
                              value={16}
                              maxValue={60}
                              strokeWidth={2}
                              styles={buildStyles({
                                strokeLinecap: "",
                                textColor: "#fff",
                                textSize: "12px",
                                pathColor: "#fff",
                                trailColor: "#d9d5d4",
                              })}
                            >
                              <span>16</span>
                              <span>Seconds</span>
                            </CircularProgressbarWithChildren>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 mt-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="">Amount</label>
                      <Inputs />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="">FROM</label>
                      <Dropdown
                        items={[
                          <div>
                            <img
                              src={ada}
                              className={styles["dropdown-image"]}
                              alt="ada"
                            />
                            ADA
                          </div>,
                          <div>
                            <img
                              src={logoSimple}
                              className={styles["dropdown-image"]}
                              alt="canon"
                            />
                            CANON
                          </div>,
                        ]}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="">Amount</label>
                      <Inputs />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="">TO</label>
                      <Dropdown
                        items={[
                          <div>
                            <img
                              src={ada}
                              className={styles["dropdown-image"]}
                              alt="ada"
                            />
                            ADA
                          </div>,
                          <div>
                            <img
                              src={logoSimple}
                              className={styles["dropdown-image"]}
                              alt="canon"
                            />
                            CANON
                          </div>,
                        ]}
                      />
                    </div>
                  </div>
                  <p className={`${styles.note} my-4`}>
                    <span>Note:</span> Only end ADA from a wallet (CanocX
                    supported wallets include Yoroi, Daedalus, Adalite, CC
                    wallet, nami). Do not send ADA from an Exchange. Examples of
                    Excahnges are Binance, CoinBase, CEX and the likes of it.
                  </p>
                </div>
                <div className="col-12 col-md-5 col-lg-4 col-xl-3">
                  <div>
                    <h3 className="fw-bold">Send ADA Here</h3>
                    {[0, 0, 0, 0].map((_, index) => (
                      <span key={index}>
                        <ArrowDown className={`${styles["arrow-down"]} me-1`} />
                      </span>
                    ))}
                  </div>
                  <div
                    className={`${styles["barcode-container"]} d-inlined-block py-3 px-2`}
                  >
                    <div className="p-3 mb-3">
                      <img src={barcode} alt="barcode" />
                    </div>
                    <div className="py-2">
                      To send ADA use your wallet <br />
                      to scan address barcode
                      <br />
                      or
                      <br />
                      Send ADA to the wallet address <br />
                      below
                    </div>
                    <div>
                      <p className={`${styles["wallet-address"]} my-1`}>
                        addr1qx39yvrdzzvsxlv5c046u
                        <br />
                        6lyyrg34ma22hda68jtpzza0rz9hkq
                        <br />
                        nxza0f6eg86t3gna2ssv
                        <br />
                        4p0v455ygu7g20et0zg5quxln35
                      </p>
                      <button className="px-3 my-1">Copy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Dashboard };
