import React from "react";
import Modal from "react-modal";
import "./AsteroidModal.css";

const AsteroidModal = ({ setAsteroid, asteroid }) => {
  if (!asteroid) return null;
  Modal.setAppElement("#root");

  const closeModal = () => {
    setAsteroid(null);
  };

  // console.log(asteroid);

  const {
    name,
    id,
    estimated_diameter: {
      meters: { estimated_diameter_max: dmax, estimated_diameter_min: dmin },
    },
    is_potentially_hazardous_asteroid,
    close_approach_data,
    orbital_data: {
      orbit_id,
      first_observation_date,
      last_observation_date,
      orbital_period,
    },
  } = asteroid;

  const closeAppData = close_approach_data.filter(
    (elem) => elem.orbiting_body === "Earth"
  );

  const getClosestAppDates = (closeAppData) => {
    const now = new Date();

    let pastDate = null;
    let futureDate = null;
    let pastMissDist = null;
    let futureMissDist = null;

    closeAppData.forEach((d) => {
      const c = new Date(d.close_approach_date);
      if (c < now) {
        if (pastDate) {
          if (c > pastDate) {
            pastDate = c;
            pastMissDist = d.miss_distance.miles;
          }
        } else {
          pastDate = c;
          pastMissDist = d.miss_distance.miles;
        }
      } else {
        if (futureDate) {
          if (c < futureDate) {
            futureDate = c;
            futureMissDist = d.miss_distance.miles;
          }
        } else {
          futureDate = c;
          futureMissDist = d.miss_distance.miles;
        }
      }
    });
    return [
      [pastDate, futureDate],
      [pastMissDist, futureMissDist],
    ];
  };

  const closeAppDates = getClosestAppDates(closeAppData);

  return (
    <Modal
      isOpen={asteroid}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="astModal"
    >
      <div className="modalContent">
        <div className="modalHead">
          <span className="modalTitle">{name}</span>
          <div className="modalSubtitle">
            <span className="modalID">{id}</span>
            <span
              className={`status ${
                is_potentially_hazardous_asteroid && "hazardous"
              }`}
            />
          </div>
        </div>
        <div className="modalBody">
          <ul className="modalList">
            <li className="modalDia">
              Estimated Diameter &asymp; {dmax.toFixed(2)}m - {dmin.toFixed(2)}m
            </li>
            <li className="modalOrbit">
              Orbital Data:
              <ul className="modalOrbitalList">
                <li className="modalOrbitID">Orbit ID: {orbit_id}</li>
                <li className="modalOrbitPeriod">
                  Orbital Period: {orbital_period}
                </li>
                <li className="modFirstObs">
                  First Observation Date: {first_observation_date}
                </li>
                <li className="modLastObs">
                  Last Observation Date: {last_observation_date}
                </li>
              </ul>
            </li>
            <li className="modalCloseApproach">
              Latest Close Approach Data (for Earth):
              <ul className="modalCloseApList">
                <li className="modalClosePast">
                  Past:
                  <ul className="modalPastList">
                    <li>
                      Date:{" "}
                      {closeAppDates[0][0]?.toDateString() ||
                        "Haven't approached in recent past."}
                    </li>
                    <li>Miss Distance (in mi):{closeAppDates[1][0]}</li>
                  </ul>
                </li>
                <li className="modalCloseFuture">
                  Future:
                  <ul className="modalFutureList">
                    <li>
                      Date:{" "}
                      {closeAppDates[0][1]?.toDateString() ||
                        "Not approaching in near future."}
                    </li>
                    <li>Miss Distance (in mi):{closeAppDates[1][1]}</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button className="modalOkButton" onClick={closeModal} >OK</button>
      </div>
    </Modal>
  );
};

export default AsteroidModal;
