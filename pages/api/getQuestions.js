const contentful = require("contentful");

export default async function getQuestions(req, res) {
  const pubKey = "6nk5sq3nl58d";
  const privKey = "zIVcfVlfaIpbvg4iSveJi4r_DJq6uS7nYEu18i_avx4";

  const client = contentful.createClient({
    space: pubKey,
    accessToken: privKey,
  });

  await client
    .getEntry("3SoM3USdFwHPIlE4sxb6lU")
    .then((response) => {
      return res.status(200).json({ data: response.fields.questions });
    })
    .catch((e) => {
      return res.status(500).send({ data: e });
    });
}
