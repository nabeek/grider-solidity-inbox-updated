const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

provider = new HDWalletProvider(
  "blood flat romance interest behind sponsor behave produce hybrid subject feature limit",
  "https://rinkeby.infura.io/v3/b0c8839aa46f472b8f117c4e0a80abf2"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: ["Hello real world"],
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();
