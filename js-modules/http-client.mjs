import http from "https";

const endpoint = "https://eo652jf1kwzi2pr.m.pipedream.net";
const request = http.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  function (response) {
    response.addListener("data", function (data) {
      console.info(`Receive data : ${data.toString()}`);
    });
  }
);
const body = JSON.stringify({
  firstName: "Asharul",
  lastName: "Maali",
});
request.write(body);
request.end();
