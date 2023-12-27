import { useState, useCallback } from "react";
import Calender from "../components/calender";
import PortalPopup from "../components/portal-popup";
import styles from "./index.module.css";

const DashboardEmptyStateYearly = () => {
  const [isCalenderOpen, setCalenderOpen] = useState(false);

  const openCalender = useCallback(() => {
    setCalenderOpen(true);
  }, []);

  const closeCalender = useCallback(() => {
    setCalenderOpen(false);
  }, []);

  return (
    <>
      <div className={styles.dashboardEmptyStateYearly1}>
        <div className={styles.background}>
          <div className={styles.backgroundChild} />
        </div>
        <div className={styles.dashboardEmptyStateYearlyChild} />
        <div className={styles.dashboardEmptyStateYearlyItem} />
        <div className={styles.dashboardEmptyStateYearlyInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.dashboardEmptyStateYearlyChild1} />
        <div className={styles.dashboardEmptyStateYearlyChild2} />
        <img
          className={styles.dashboardEmptyStateYearlyChild3}
          alt=""
          src="/group-20464@2x.png"
        />
        <img className={styles.vectorIcon} alt="" src="/vector-2@2x.png" />
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.week}>1 Week</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.month}>1 Month</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.year}>1 Year</div>
          </div>
        </div>
        <div className={styles.salesOverview}>Sales Overview</div>
        <div className={styles.div}>
          <span>₦ 0</span>
          <span className={styles.span}>.00</span>
        </div>
        <div className={styles.totalSold}>Total Sold</div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <div className={styles.div1}>0</div>
          <div className={styles.total}>Total</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild1} />
          <div className={styles.div1}>0</div>
          <div className={styles.available}>Available</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild1} />
          <div className={styles.div1}>0</div>
          <div className={styles.soldOut}>Sold Out</div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild4} />
          <div className={styles.div4}>0</div>
          <div className={styles.total1}>Total</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild5} />
          <div className={styles.div5}>0</div>
          <div className={styles.new}>New</div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild4} />
          <div className={styles.div6}>0</div>
          <div className={styles.active}>Active</div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupChild4} />
          <div className={styles.div6}>0</div>
          <div className={styles.active}>Inactive</div>
        </div>
        <div className={styles.topSelling}>Top Selling</div>
        <div className={styles.viewAllParent}>
          <div className={styles.viewAll}>View all</div>
        </div>
        <div className={styles.viewAllGroup}>
          <div className={styles.viewAll}>View all</div>
        </div>
        <div className={styles.wholeUnitsSold1}>Whole units sold</div>
        <div className={styles.none}>None</div>
        <div className={styles.propertyIconParent}>
          <img
            className={styles.propertyIcon1}
            alt=""
            src="/property-icon@2x.png"
          />
          <div className={styles.viewAll}>Property Overview</div>
        </div>
        <div className={styles.div8}>0</div>
        <div className={styles.fractionsAvailable}>Fractions available</div>
        <div className={styles.div9}>0</div>
        <div className={styles.welcomeToYour1}>Welcome to your Dashboard</div>
        <div className={styles.showingOverviewJan1}>
          Showing overview Jan 2022 - Sep 2022
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-12749@2x.png"
          />
          <div className={styles.hiAhmed}>Hi Ahmed</div>
        </div>
        <div className={styles.dashboardEmptyStateYearlyChild4} />
        <div className={styles.dashboardEmptyStateYearlyChild5} />
        <div className={styles.div10}>1/5</div>
        <div className={styles.groupParent1}>
          <img className={styles.frameItem} alt="" src="/group-20464@2x.png" />
          <img className={styles.frameInner} alt="" src="/group-20463@2x.png" />
        </div>
        <div className={styles.div11}>
          <span>₦ 0</span>
          <span className={styles.span}>.00</span>
        </div>
        <div className={styles.totalOutstandingBalance1}>
          Total Outstanding Balance
        </div>
        <div className={styles.outstandingBalance}>Outstanding Balance</div>
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild8} />
          <div className={styles.groupChild9} />
        </div>
        <div className={styles.none1}>None</div>
        <div className={styles.div12}>₦ 0.00</div>
        <div className={styles.dashboardEmptyStateYearlyChild6} />
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <div className={styles.profileParent}>
          <img className={styles.profileIcon1} alt="" src="/profile@2x.png" />
          <div className={styles.customersOverview}>Customers Overview</div>
        </div>
        <div className={styles.viewAllContainer}>
          <div className={styles.viewAll}>View all</div>
          <img className={styles.frameIcon12} alt="" src="/frame@2x.png" />
        </div>
        <div className={styles.listingOverview}>Listing Overview</div>
        <div className={styles.noneParent}>
          <div className={styles.none2}>None</div>
          <div className={styles.groupChild10} />
          <img className={styles.image3Icon3} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild11} />
          <div className={styles.div13}>₦ 0.00</div>
          <div className={styles.deposit}>Deposit</div>
          <div className={styles.frameParent}>
            <img className={styles.frameIcon15} alt="" src="/frame@2x.png" />
            <div className={styles.veergeAssistant}>0%</div>
          </div>
        </div>
        <div className={styles.dashboardEmptyStateYearlyChild7} />
        <div className={styles.div15}>₦ 0.00</div>
        <div className={styles.balance}>Balance</div>
        <div className={styles.dashboardEmptyStateYearlyChild8} />
        <div className={styles.div16}>
          <span>₦ 0</span>
          <span className={styles.span}>.00</span>
        </div>
        <div className={styles.dashboardEmptyStateYearlyChild9} />
        <img
          className={styles.bookmark1Icon1}
          alt=""
          src="/bookmark-1@2x.png"
        />
        <div className={styles.div17}>0</div>
        <div className={styles.numberOfWatchlists1}>Number of watchlists</div>
        <div className={styles.rectangleParent9}>
          <div className={styles.groupChild11} />
          <div className={styles.div13}>₦ 0.00</div>
          <div className={styles.deposit}>Withdrawal</div>
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon15} alt="" src="/frame@2x.png" />
            <div className={styles.veergeAssistant}>0%</div>
          </div>
        </div>
        <img
          className={styles.dashboardEmptyStateYearlyChild10}
          alt=""
          src="/group-20471@2x.png"
        />
        <div className={styles.janParent}>
          <div className={styles.jan}>Jan</div>
          <div className={styles.jan}>Feb</div>
          <div className={styles.jan}>Mar</div>
          <div className={styles.jan}>Apr</div>
          <div className={styles.jan}>May</div>
          <div className={styles.jan}>Jun</div>
          <div className={styles.jan}>Jul</div>
          <div className={styles.jan}>Aug</div>
          <div className={styles.jan}>Sep</div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild13} alt="" src="/vector-4@2x.png" />
          <div className={styles.mostViewed}>Most viewed</div>
        </div>
        <div className={styles.noneGroup}>
          <div className={styles.none2}>None</div>
          <div className={styles.groupChild14} />
          <img className={styles.image3Icon3} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.vectorGroup}>
          <img className={styles.groupChild15} alt="" src="/vector-5@2x.png" />
          <div className={styles.mostViewed}>Most shared</div>
        </div>
        <div className={styles.noneContainer}>
          <div className={styles.none2}>None</div>
          <div className={styles.groupChild16} />
          <img className={styles.image3Icon3} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.mostWatchlisted}>Most watchlisted</div>
        <img
          className={styles.bookmark2Icon1}
          alt=""
          src="/bookmark-2@2x.png"
        />
        <div className={styles.downlaodReportState1}>
          <img className={styles.frameIcon17} alt="" />
          <div className={styles.viewAll}>View Transactions</div>
          <img className={styles.frameIcon17} alt="" />
        </div>
        <img
          className={styles.dashboardEmptyStateYearlyChild11}
          alt=""
          src="/vector-3@2x.png"
        />
        <img className={styles.image1Icon} alt="" src="/image-2@2x.png" />
        <div className={styles.fiRrBulbParent}>
          <img className={styles.frameIcon12} alt="" src="/firrbulb@2x.png" />
          <div className={styles.veergeAssistant}>Veerge Assistant</div>
          <img
            className={styles.frameIcon12}
            alt=""
            src="/firrcrosscircle@2x.png"
          />
        </div>
        <div className={styles.endToEndEncryptionParent}>
          <div className={styles.endToEndEncryption}>End-to-end encryption</div>
          <img className={styles.fiRrLockIcon1} alt="" src="/firrlock@2x.png" />
        </div>
        <div className={styles.developerPortalHeader1}>
          <div className={styles.dashbaord}>
            <div className={styles.dashbaordChild} />
            <div className={styles.frameParent1}>
              <img className={styles.frameIcon19} alt="" />
              <img className={styles.notification1Icon2} alt="" />
              <img className={styles.notification1Icon2} alt="" />
            </div>
            <div className={styles.dashbaordItem} />
            <div className={styles.infoCircle1Parent}>
              <img className={styles.propertyIcon1} alt="" />
              <div className={styles.veergeAssistant}>Help Centre</div>
            </div>
            <img className={styles.component2Icon} alt="" />
            <div className={styles.groupParent2}>
              <div className={styles.rectangleParent10}>
                <div className={styles.groupChild17} />
                <div className={styles.home1Parent}>
                  <img
                    className={styles.propertyIcon1}
                    alt=""
                    src="/home-1@2x.png"
                  />
                  <div className={styles.hiAhmed}>Dashboard</div>
                </div>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild18} />
                <div className={styles.location1Parent}>
                  <img
                    className={styles.propertyIcon1}
                    alt=""
                    src="/location-1@2x.png"
                  />
                  <div className={styles.veergeAssistant}>Listings</div>
                </div>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild18} />
                <div className={styles.profile1Parent}>
                  <img
                    className={styles.propertyIcon1}
                    alt=""
                    src="/profile-1@2x.png"
                  />
                  <div className={styles.veergeAssistant}>Users</div>
                </div>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild18} />
                <div className={styles.wallet1Parent}>
                  <img
                    className={styles.propertyIcon1}
                    alt=""
                    src="/wallet-1@2x.png"
                  />
                  <div className={styles.veergeAssistant}>Account</div>
                </div>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild18} />
                <div className={styles.wallet1Parent}>
                  <img
                    className={styles.propertyIcon1}
                    alt=""
                    src="/calendar-1@2x.png"
                  />
                  <div className={styles.veergeAssistant}>Request</div>
                </div>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild18} />
                <div className={styles.activity1Parent}>
                  <img
                    className={styles.activity1Icon1}
                    alt=""
                    src="/activity-1@2x.png"
                  />
                  <div className={styles.veergeAssistant}>Settings</div>
                </div>
              </div>
            </div>
            <div className={styles.newListing}>
              <img className={styles.propertyIcon1} alt="" />
              <div className={styles.veergeAssistant}>New Listing</div>
            </div>
            <div className={styles.rectangleParent16}>
              <div className={styles.groupChild23} />
              <img
                className={styles.search1Icon1}
                alt=""
                src="/search-1@2x.png"
              />
              <div className={styles.searchPropertiesCustomer1}>
                Search... properties, customers here
              </div>
            </div>
          </div>
          <img
            className={styles.iconlylightsetting}
            alt=""
            src="/iconlylightsetting@2x.png"
          />
          <div className={styles.newSet}>
            <img
              className={styles.frameInner}
              alt=""
              src="/iconlyboldplus@2x.png"
            />
            <img
              className={styles.iconlybulkcalendar}
              alt=""
              src="/iconlybulkcalendar@2x.png"
              onClick={openCalender}
            />
            <img
              className={styles.notification1Icon3}
              alt=""
              src="/notification-1@2x.png"
            />
          </div>
          <div className={styles.logo}>
            <img
              className={styles.inscentive1Icon}
              alt=""
              src="/inscentive-1@2x.png"
            />
            <div className={styles.forMainstone}>For Mainstone</div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <img className={styles.frameIcon15} alt="" src="/frame@2x.png" />
          <div className={styles.veergeAssistant}>0%</div>
        </div>
        <div className={styles.purchaseParent}>
          <div className={styles.viewAll}>Purchase</div>
          <div className={styles.frameParent3}>
            <img className={styles.frameIcon15} alt="" src="/frame@2x.png" />
            <div className={styles.veergeAssistant}>0%</div>
          </div>
        </div>
        <div className={styles.component13}>
          <img
            className={styles.component32Icon1}
            alt=""
            src="/component-32@2x.png"
          />
          <div className={styles.ahmedAli}>Ahmed Ali</div>
        </div>
      </div>
      {isCalenderOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalender}
        >
          <Calender onClose={closeCalender} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardEmptyStateYearly;
