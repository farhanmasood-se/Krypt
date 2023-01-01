require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/4lXC_LrYHPhk0ieGDKzGNYqNOrrNozh0",
      accounts: [
        "439c5d9f35067775d46866ebeddd31c6c68672d4661599eab5a5474872151056",
      ],
    },
  },
};
