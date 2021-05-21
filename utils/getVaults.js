const axios = require('axios');

const getVaults = async fileName => {
  const vaultsEndpoint = `https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/${fileName}`;

  try {
    const response = await axios.get(vaultsEndpoint);
    const data = response.data;
    let vaults = '[' + data.substring(data.indexOf('\n') + 1);
    vaults = eval(vaults);
    return vaults;
  } catch (err) {
    console.error(err);
    return 0;
  }
};

module.exports = { getVaults };
