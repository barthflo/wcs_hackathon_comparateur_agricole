import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./accordions.css";

import { FETCH } from "../../Fetch";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Accordion_info_price() {
  const [moyprice, setmoyprice] = useState({});
  const [isLoadingmoyprice, setLoadingmoyprice] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${FETCH}/moy`)
      .then((res) => {
        setmoyprice(res.data);
        setLoadingmoyprice(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  return (
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions">Avoine</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "avoine")
                    .map((res) => (
                      <div
                        key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info text-capitalize">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions">Blé</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "ble")
                    .map((res) => (
                      <div
                      key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info text-capitalize">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions text-capitalize">Colza</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "colza")
                    .map((res) => (
                      <div
                      key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info text-capitalize">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions">Feverol</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "feverol")
                    .map((res) => (
                      <div
                      key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info text-capitalize">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions">Mais</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "mais")
                    .map((res) => (
                      <div
                      key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info text-capitalize">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions">Orge</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "orge")
                    .map((res) => (
                      <div
                      key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions">Pois</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "pois")
                    .map((res) => (
                      <div
                      key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions">Tournesol</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "tournesol")
                    .map((res) => (
                      <div
                      key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h6 className="title-accordions">Triticale</h6>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((res) => res.category === "triticale")
                    .map((res) => (
                      <div
                      key={res.name}
                        className="d-flex flex-row justify-content-between text-info-accordions mb-1"
                      >
                        <li className="text-info">
                          {" "}
                          {res.name} : {res.AveragePrice}{" "}
                          <span className="color-ET">€/T</span>{" "}
                        </li>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
  );
}

export default Accordion_info_price;
