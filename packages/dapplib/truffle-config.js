require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food point razor snow collect hard light army gate'; 
let testAccounts = [
"0xf853027e319d4f313bc5f2769ed11b88358d6e8c882705dcc4161c0045b531bf",
"0xc4d74055855b033dafb34a03f19716d534cc389d3a8138b38177fc698e8224a5",
"0xc3e0e4f5f4488b6d212e256864dda6db1fd4d822814bd26ea8f96a1cc3178022",
"0xde1a92ebc49c4c57520bfed54a8421df250b7ce86ebe0bff0aa8993615916b70",
"0x5a5d902a015258e12758dbdf3ef3ad4ef223460d5d2bb4e13e5f5c7a00998a92",
"0xc140135693ca5b54df36f4617bfc8e3e272562d38e2f9a0efb1d2420bb6bfea1",
"0x8984c091f94ba20b0491f3310cf6a60e68cfaa2cbde403abf77d7080def98697",
"0xf59097ba056fa5dc76d6b3296578c448374f2266a8585fede115cc441dc7bc55",
"0xa58d426583374ea46b02db0ee2cafe429db1ec5086f9085334bab1ef6040efe2",
"0x4b8bb0c50c637d778abcbbd5072f8b0a1deee2dcef533224f87821973ce44394"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

