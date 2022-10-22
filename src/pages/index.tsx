import type { NextPage } from 'next'
import Image from 'next/image'
import { AdminLayout } from '@layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, ProgressBar,
} from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import React from 'react'
import dataJSON from 'public/csvjson.json'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const getHeadings = () => {
  return Object.keys(dataJSON[0]);
}

const Home: NextPage = () => (
  <AdminLayout>
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0">Bosch Information</h4>
            <div className="small text-black-50">January - July 2022</div>
          </div>
          <div className="d-none d-md-block">
            <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
              <input
                className="btn-check"
                id="option1"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option1">Day</label>
              <input
                className="btn-check"
                id="option2"
                type="radio"
                name="options"
                autoComplete="off"
                defaultChecked
              />
              <label
                className="btn btn-outline-secondary active"
                htmlFor="option2"
              >
                Month
              </label>
              <input
                className="btn-check"
                id="option3"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option3">Year</label>
            </ButtonGroup>
            <Button variant="primary">
              <FontAwesomeIcon icon={faDownload} fixedWidth />
            </Button>
          </div>
        </div>
        <div
          style={{
            height: '300px',
            marginTop: '40px',
          }}
        >
          <Line
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(13, 202, 240, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
                fill: true,
              }, {
                label: 'My Second dataset',
                borderColor: 'rgba(25, 135, 84, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
              }, {
                label: 'My Third dataset',
                borderColor: 'rgba(220, 53, 69, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: [65, 65, 65, 65, 65, 65, 65],
              }],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  beginAtZero: true,
                  max: 250,
                  ticks: {
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="row row-cols-1 row-cols-md-5 text-center">
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Porsche</div>
            <div className="fw-semibold">29.703 Assignment (40%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="success"
              now={40}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">BMW</div>
            <div className="fw-semibold">24.093 Assignment (20%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="info"
              now={20}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Audi</div>
            <div className="fw-semibold">78.706 Assignment (60%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="warning"
              now={60}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Others</div>
            <div className="fw-semibold">22.123 Assignment (80%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="danger"
              now={80}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Average workload</div>
            <div className="fw-semibold">65.15%</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="primary"
              now={65}
            />
          </div>
        </div>
      </Card.Footer>
    </Card>

    <div className="row">
      <div className="col-md-12">
        <Card className="mb-4">
          <Card.Header>
            Bosch information
          </Card.Header>
          <Card.Body>
          <div className="table-responsive">
              <table className="table border mb-0">
                <thead className="table-light fw-semibold">
                  <tr className="align-middle">
                  {getHeadings().map(heading => {
                    return <th key={heading}>{heading}</th>
                  })}
                  </tr>
                </thead>
                <tbody>
                {dataJSON.map((row, index) => {
                    return <tr key={index}>
                      <td>{row.Auftragsnummer}</td>
                      <td>{row.Betriebsstunden}</td>
                      <td>{row.Biegespannung}</td>
                      <td>{row.Fügekraft}</td>
                      <td>{row['Komponenten-ID']}</td>
                      <td>{row.Komponentendurchmesser}</td>
                      <td>{row.Komponentenlänge}</td>
                      <td>{row.Komponentenmasse}</td>
                      <td>{row.Kundenname}</td>
                      <td>{row.Produktpreis}</td>
                  </tr>;
                })}
                </tbody>
              </table> 
            </div>

          </Card.Body>
        </Card>
      </div>
    </div>

  </AdminLayout>
)

export default Home
