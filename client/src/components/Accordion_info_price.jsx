import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { FETCH } from "../Fetch";
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
        console.Log(res.data)
        setmoyprice(res.data);
        setLoadingmoyprice(true);
      })
      .catch(function (erreur) {
      });
  });

  return (
    <div>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <p>Blé</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((data) => data.category === "ble")
                    .map((data) => (
                      <div key={data.name}>
                        <p>{data.name}</p>
                        <p>{data.AveragePrice}</p>
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
              <p>Avoine</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((data) => data.category === "ble")
                    .map((data) => (
                      <div>
                        <p>{data.name}</p>
                        <p>{data}</p>
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
              <p>Blé</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((data) => data.category === "ble")
                    .map((data) => (
                      <div>
                        <p>{data.name}</p>
                        <p>{data}</p>
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
              <p>Triticale</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((data) => data.category === "ble")
                    .map((data) => (
                      <div>
                        <p>{data.name}</p>
                        <p>{data}</p>
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
              <p>Orge</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((data) => data.category === "ble")
                    .map((data) => (
                      <div>
                        <p>{data.name}</p>
                        <p>{data}</p>
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
              <p>Mais</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((data) => data.category === "ble")
                    .map((data) => (
                      <div>
                        <p>{data.name}</p>
                        <p>{data}</p>
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
              <p>Pois</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((data) => data.category === "ble")
                    .map((data) => (
                      <div>
                        <p>{data.name}</p>
                        <p>{data}</p>
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
              <p>Colza</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {isLoadingmoyprice
                ? moyprice
                    .filter((data) => data.category === "ble")
                    .map((data) => (
                      <div>
                        <p>{data.name}</p>
                        <p>{data}</p>
                      </div>
                    ))
                : null}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      ))
      {/* : null} */}
    </div>
  );
}

export default Accordion_info_price;
