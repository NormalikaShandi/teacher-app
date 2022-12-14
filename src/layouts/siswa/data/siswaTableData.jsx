/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { Link } from "react-router-dom";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "nama siswa", accessor: "nama", align: "left" },
      { Header: "no telpon", accessor: "telpon", width: "20%", align: "left" },
      { Header: "absen", accessor: "absen", width: "20%", align: "left" },
      { Header: "nilai", accessor: "nilai", width: "20%", align: "left" },
    ],

    rows: [
      {
        nama: <Project name="Asana" />,
        telpon: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            089578
          </MDTypography>
        ),
        absen: (
          <MDTypography
            component={Link}
            to="/absen"
            variant="button"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Lihat
          </MDTypography>
        ),
        nilai: (
          <MDTypography
            component={Link}
            to="/nilai"
            variant="button"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Lihat
          </MDTypography>
        ),
      },
    ],
  };
}
