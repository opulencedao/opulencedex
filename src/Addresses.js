const CONTRACTS = {
  56: {
    // bsc mainnet
    Treasury: "0xa44E7252a0C137748F523F112644042E5987FfC7",
    BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    GMT: "0x99e92123eB77Bc8f999316f622e5222498438784",
    Vault: "0xc73A8DcAc88498FD4b4B1b2AaA37b0a2614Ff67B",
    Router: "0xD46B23D042E976F8666F554E928e0Dc7478a8E1f",
    Reader: "0x087A618fD25c92B61254DBe37b09E5E8065FeaE7",
    AmmFactory: "0xBCfCcbde45cE874adCB698cC183deBcF17952812",
    AmmFactoryV2: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    OrderBook: "0x1111111111111111111111111111111111111111",
    OrderBookReader: "0x1111111111111111111111111111111111111111",
    OpecMigrator: "0xDEF2af818514c1Ca1A9bBe2a4D45E28f260063f9",
    USDG: "0x85E76cbf4893c1fbcB34dCF1239A91CE2A4CF5a7",
    NATIVE_TOKEN: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    XGMT: "0xe304ff0983922787Fd84BC9170CD21bF78B16B10",
    GMT_USDG_PAIR: "0xa41e57459f09a126F358E118b693789d088eA8A0",
    XGMT_USDG_PAIR: "0x0b622208fc0691C2486A3AE6B7C875b4A174b317",
    GMT_USDG_FARM: "0x3E8B08876c791dC880ADC8f965A02e53Bb9C0422",
    XGMT_USDG_FARM: "0x68D7ee2A16AB7c0Ee1D670BECd144166d2Ae0759",
    USDG_YIELD_TRACKER: "0x0EF0Cf825B8e9F89A43FfD392664131cFB4cfA89",
    XGMT_YIELD_TRACKER: "0x82A012A9b3003b18B6bCd6052cbbef7Fa4892e80",
    GMT_USDG_FARM_TRACKER_XGMT: "0x08FAb024BEfcb6068847726b2eccEAd18b6c23Cd",
    GMT_USDG_FARM_TRACKER_NATIVE: "0xd8E26637B34B2487Cad1f91808878a391134C5c2",
    XGMT_USDG_FARM_TRACKER_XGMT: "0x026A02F7F26C1AFccb9Cba7C4df3Dc810F4e92e8",
    XGMT_USDG_FARM_TRACKER_NATIVE: "0x22458CEbD14a9679b2880147d08CA1ce5aa40E84",
    AUTO: "0xa184088a740c695E156F91f5cC086a06bb78b827",
    AUTO_USDG_PAIR: "0x0523FD5C53ea5419B4DAF656BC1b157dDFE3ce50",
    AUTO_USDG_FARM: "0xE6958298328D02051769282628a3b4178D0F3A47",
    AUTO_USDG_FARM_TRACKER_XGMT: "0x093b8be41c1A30704De84a9521632f9a139c08bd",
    AUTO_USDG_FARM_TRACKER_NATIVE: "0x23ed48E5dce3acC7704d0ce275B7b9a0e346b63A",
    GMT_GMX_IOU: "0x47052469970C2484729875CC9E2dd2683fcE71fb",
    XGMT_GMX_IOU: "0xeB3733DFe3b68C9d26898De2493A3Bb59FDb4A7B",
    GMT_USDG_GMX_IOU: "0x481312655F81b5e249780A6a49735335BF6Ca7f4",
    XGMT_USDG_GMX_IOU: "0x8095F1A92526C304623483018aA28cC6E62EB1e1",
  },
  97: {
    // bsc testnet
    Vault: "0x1B183979a5cd95FAF392c8002dbF0D5A1C687D9a",
    Router: "0x10800f683aa564534497a5b67F45bE3556a955AB",
    Reader: "0x98D4742F1B6a821bae672Cd8721283b91996E454",
    AmmFactory: "0x6725f303b657a9451d8ba641348b6761a6cc7a17",
    AmmFactoryV2: "0x1111111111111111111111111111111111111111",
    OrderBook: "0x9afD7B4f0b58d65F6b2978D3581383a06b2ac4e9",
    OrderBookReader: "0x0713562970D1A802Fa3FeB1D15F9809943982Ea9",
    OpecMigrator: "0xDEF2af818514c1Ca1A9bBe2a4D45E28f260063f9",
    USDG: "0x2D549bdBf810523fe9cd660cC35fE05f0FcAa028",
    GMT: "0xedba0360a44f885ed390fad01aa34d00d2532817",
    NATIVE_TOKEN: "0x612777Eea37a44F7a95E3B101C39e1E2695fa6C2",
    XGMT: "0x28cba798eca1a3128ffd1b734afb93870f22e613",
    GMT_USDG_PAIR: "0xe0b0a315746f51932de033ab27223d85114c6b85",
    XGMT_USDG_PAIR: "0x0108de1eea192ce8448080c3d90a1560cf643fa0",
    GMT_USDG_FARM: "0xbe3cB06CE03cA692b77902040479572Ba8D01b0B",
    XGMT_USDG_FARM: "0x138E92195D4B99CE3618092D3F9FA830d9A69B4b",
    USDG_YIELD_TRACKER: "0x62B49Bc3bF252a5DB26D88ccc7E61119e3179B4f",
    XGMT_YIELD_TRACKER: "0x5F235A582e0993eE9466FeEb8F7B4682993a57d0",
    GMT_USDG_FARM_TRACKER_XGMT: "0x4f8EE3aE1152422cbCaFACd4e3041ba2D859913C",
    GMT_USDG_FARM_TRACKER_NATIVE: "0xd691B26E544Fe370f39A776964c991363aF72e56",
    XGMT_USDG_FARM_TRACKER_XGMT: "0xfd5617CFB082Ba9bcD62d654603972AE312bC695",
    XGMT_USDG_FARM_TRACKER_NATIVE: "0x0354387DD85b7D8aaD1611B3D167A384d6AE0c28",
    GMT_GMX_IOU: "0x47052469970C2484729875CC9E2dd2683fcE71fb",
    XGMT_GMX_IOU: "0xeB3733DFe3b68C9d26898De2493A3Bb59FDb4A7B",
    GMT_USDG_GMX_IOU: "0x481312655F81b5e249780A6a49735335BF6Ca7f4",
    XGMT_USDG_GMX_IOU: "0x8095F1A92526C304623483018aA28cC6E62EB1e1",
  },
  421611: {
    // arbitrum testnet
    Vault: "0xA4704fBfaf7c89511668052931Ba0f1816D2c9d3",
    Router: "0x526f42EA12E167E36E3De747187f53b6989d121A",
    Reader: "0x24e9C35B953F2aFb56f92592d2E8Ac2E58eA6912",
    NATIVE_TOKEN: "0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681",
    OrderBook: "0x84B1FEA4A2c1e0C07f34755ac4cf5aD26a07485d",
    OrderBookReader: "0x9Ed8Aea78D6Af0D4089f4D24066b8EFdA59747D9",

    // everything else is from 97
    AmmFactory: "0x6725f303b657a9451d8ba641348b6761a6cc7a17",
    AmmFactoryV2: "0x1111111111111111111111111111111111111111",
    OpecMigrator: "0xDEF2af818514c1Ca1A9bBe2a4D45E28f260063f9",
    USDG: "0x2D549bdBf810523fe9cd660cC35fE05f0FcAa028",
    GMT: "0xedba0360a44f885ed390fad01aa34d00d2532817",
    XGMT: "0x28cba798eca1a3128ffd1b734afb93870f22e613",
    GMT_USDG_PAIR: "0xe0b0a315746f51932de033ab27223d85114c6b85",
    XGMT_USDG_PAIR: "0x0108de1eea192ce8448080c3d90a1560cf643fa0",
    GMT_USDG_FARM: "0xbe3cB06CE03cA692b77902040479572Ba8D01b0B",
    XGMT_USDG_FARM: "0x138E92195D4B99CE3618092D3F9FA830d9A69B4b",
    USDG_YIELD_TRACKER: "0x62B49Bc3bF252a5DB26D88ccc7E61119e3179B4f",
    XGMT_YIELD_TRACKER: "0x5F235A582e0993eE9466FeEb8F7B4682993a57d0",
    GMT_USDG_FARM_TRACKER_XGMT: "0x4f8EE3aE1152422cbCaFACd4e3041ba2D859913C",
    GMT_USDG_FARM_TRACKER_NATIVE: "0xd691B26E544Fe370f39A776964c991363aF72e56",
    XGMT_USDG_FARM_TRACKER_XGMT: "0xfd5617CFB082Ba9bcD62d654603972AE312bC695",
    XGMT_USDG_FARM_TRACKER_NATIVE: "0x0354387DD85b7D8aaD1611B3D167A384d6AE0c28",
    GMT_GMX_IOU: "0x47052469970C2484729875CC9E2dd2683fcE71fb",
    XGMT_GMX_IOU: "0xeB3733DFe3b68C9d26898De2493A3Bb59FDb4A7B",
    GMT_USDG_GMX_IOU: "0x481312655F81b5e249780A6a49735335BF6Ca7f4",
    XGMT_USDG_GMX_IOU: "0x8095F1A92526C304623483018aA28cC6E62EB1e1",
  },
  42161: {
    // arbitrum mainnet
    Vault: "0x489ee077994B6658eAfA855C308275EAd8097C4A",
    Router: "0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064",
    VaultReader: "0xfebB9f4CAC4cD523598fE1C5771181440143F24A",
    Reader: "0x2b43c90D1B727cEe1Df34925bcd5Ace52Ec37694",
    XpcManager: "0x321F653eED006AD1C29D174e17d96351BDe22649",
    RewardRouter: "0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1",
    RewardReader: "0x8BFb8e82Ee4569aee78D03235ff465Bd436D40E0",
    NATIVE_TOKEN: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    XPC: "0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258",
    OPEC: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    ES_GMX: "0xf42Ae1D54fd613C9bb14810b0588FaAa09a426cA",
    BN_GMX: "0x35247165119B69A40edD5304969560D0ef486921",
    USDG: "0x45096e7aA921f27590f8F19e457794EB09678141",
    ES_GMX_IOU: "0x6260101218eC4cCfFF1b778936C6f2400f95A954",
    StakedOpecTracker: "0x908C4D94D34924765f1eDc22A1DD098397c59dD4",
    BonusOpecTracker: "0x4d268a7d4C16ceB5a606c173Bd974984343fea13",
    FeeOpecTracker: "0xd2D1162512F927a7e282Ef43a362659E4F2a728F",
    StakedXpcTracker: "0x1aDDD80E6039594eE970E5872D247bf0414C8903",
    FeeXpcTracker: "0x4e971a87900b931fF39d1Aad67697F49835400b6",

    StakedOpecDistributor: "0x23208B91A98c7C1CD9FE63085BFf68311494F193",
    StakedXpcDistributor: "0x60519b48ec4183a61ca2B8e37869E675FD203b34",

    OpecVester: "0x199070DDfd1CFb69173aa2F7e20906F26B363004",
    XpcVester: "0xA75287d2f8b217273E7FCD7E86eF07D33972042E",

    OrderBook: "0x09f77E8A13De9a35a7231028187e9fD5DB8a2ACB",
    OrderExecutor: "0x7257ac5D0a0aaC04AA7bA2AC0A6Eb742E332c3fB",
    OrderBookReader: "0xa27C20A7CF0e1C68C0460706bB674f98F362Bc21",

    PositionRouter: "0x3D6bA331e3D9702C5e8A8d254e5d8a285F223aba",
    PositionManager: "0x87a4088Bd721F83b6c2E5102e2FA47022Cb1c831",

    UniswapOpecEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d",
    ReferralReader: "0x8Aa382760BCdCe8644C33e6C2D52f6304A76F5c8",
  },
  43114: {
    // avalanche
    Vault: "0x9ab2De34A33fB459b538c43f251eB825645e8595",
    Router: "0x5F719c2F1095F7B9fc68a68e35B51194f4b6abe8",
    VaultReader: "0x66eC8fc33A26feAEAe156afA3Cb46923651F6f0D",
    Reader: "0x2eFEE1950ededC65De687b40Fd30a7B5f4544aBd",
    XpcManager: "0xe1ae4d4b06A5Fe1fc288f6B4CD72f9F8323B107F",
    RewardRouter: "0x82147C5A7E850eA4E28155DF107F2590fD4ba327",
    RewardReader: "0x04Fc11Bd28763872d143637a7c768bD96E44c1b6",
    NATIVE_TOKEN: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    XPC: "0x01234181085565ed162a948b6a5e88758CD7c7b8",
    OPEC: "0x62edc0692BD897D2295872a9FFCac5425011c661",
    ES_GMX: "0xFf1489227BbAAC61a9209A08929E4c2a526DdD17",
    BN_GMX: "0x8087a341D32D445d9aC8aCc9c14F5781E04A26d2",
    USDG: "0xc0253c3cC6aa5Ab407b5795a04c28fB063273894",
    ES_GMX_IOU: "0x6260101218eC4cCfFF1b778936C6f2400f95A954", // placeholder address

    StakedOpecTracker: "0x2bD10f8E93B3669b6d42E74eEedC65dd1B0a1342",
    BonusOpecTracker: "0x908C4D94D34924765f1eDc22A1DD098397c59dD4",
    FeeOpecTracker: "0x4d268a7d4C16ceB5a606c173Bd974984343fea13",
    StakedXpcTracker: "0x9e295B5B976a184B14aD8cd72413aD846C299660",
    FeeXpcTracker: "0xd2D1162512F927a7e282Ef43a362659E4F2a728F",

    StakedOpecDistributor: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    StakedXpcDistributor: "0xDd593Cf40734199afc9207eBe9ffF23dA4Bf7720",

    OpecVester: "0x472361d3cA5F49c8E633FB50385BfaD1e018b445",
    XpcVester: "0x62331A7Bd1dfB3A7642B7db50B5509E57CA3154A",

    OrderBook: "0x4296e307f108B2f583FF2F7B7270ee7831574Ae5",
    OrderExecutor: "0x4296e307f108B2f583FF2F7B7270ee7831574Ae5",
    OrderBookReader: "0xccFE3E576f8145403d3ce8f3c2f6519Dae40683B",

    PositionRouter: "0x195256074192170d1530527abC9943759c7167d8",
    PositionManager: "0xF2ec2e52c3b5F8b8bd5A3f93945d05628A233216",

    TraderJoeOpecAvaxPool: "0x0c91a070f862666bbcce281346be45766d874d98",
    ReferralStorage: "0x827ed045002ecdabeb6e2b0d1604cf5fc3d322f8",
    ReferralReader: "0x505Ce16D3017be7D76a7C2631C0590E71A975083",
  },
  43113: {
    // avalanche
    Vault: "0x050C08cdeEc2e081Eb0Bf5181AAA4D8FfC18A38f",
    Router: "0x6d2FCB937472CB4c471ec79711f998984361C0ab",
    VaultReader: "0xD806D241DCa6989f798FAF4afdC5d59f8b115DEB",
    Reader: "0x85e1ff48dCC551B2eDeAfbFa66adA1a22B397EC3",
    XpcManager: "0x35a75e1504455984495B5E60EaeAA8cCeD12eD95",
    RewardRouter: "0x3e13f0C4F2477a704342C6d2E90FeEFF0AE9947A",
    RewardReader: "0x1fE096b901200E4320f0a357606711606961A6bF",
    NATIVE_TOKEN: "0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3",
    XPC: "0xDE7A1DC9a73f22F9B628636539E2b8d2FE866069",
    OPEC: "0xeBC2C29BCd212A5251E0980B6Fc9e81717A8Fb3E",
    ES_GMX: "0xDB0e35AeE67f801a227f92F87FD05AeA703B4b8c",
    BN_GMX: "0xE4522E63F0b97c32A9daD0203D47369f8b93D355",
    USDG: "0x8b6AD321b1d4BCE9F25d0Ac092c3C1144c777C93",
    ES_GMX_IOU: "0xFA612430C3244a93CDEee51d9178A5eaB99233EA", // placeholder address

    StakedOpecTracker: "0x4B46C00d3ab067014649Cad5C3f61e595C5c39aD",
    BonusOpecTracker: "0xeCF468231a25C08D0dF138868acdB44998E7fB0b",
    FeeOpecTracker: "0x2D4E130D54510c6Fc94028cCA9B8Fce83FFCF38C",
    StakedXpcTracker: "0x8B1DeD0b2E51A63b7aC85617E20aCFCc62e137A3",
    FeeXpcTracker: "0x005C133651b0eF91947DeBb668Cf3ca85Db7ebcf",

    StakedOpecDistributor: "0x707cC19bE1772Dc122377cd4Db2Cd03A832CA0f2",
    StakedXpcDistributor: "0x1BbE8CF4B617f197Ec99142c9f8905bE77DE649A",

    OpecVester: "0x6A460D33185f80a44C23208f2776e09c2f421c02",
    XpcVester: "0xAD767eE83e5E70433bD474E19E7BbDE79DDeF670",

    OrderBook: "0xE41Abd3E4Ac203d92606a8b4c2Cc58bB9Ea3B167",
    OrderExecutor: "0xE41Abd3E4Ac203d92606a8b4c2Cc58bB9Ea3B167",
    OrderBookReader: "0x6058b641C85cA9E34E763E8f0A45B6842726E7f2",

    PositionRouter: "0x1b9038DB729F94732dE2Fc956ecddd25b03A785B",
    PositionManager: "0x44158D094324fE238D345F699a6c2aD20A492533",

    TraderJoeOpecAvaxPool: "0xffFe600c27dD37333a82915AC3265529A7b92eE3",
    ReferralStorage: "0xc6838BEb525Dc9DB482b3E512cCFabF2B69A8A63",
    ReferralReader: "0x52A51823165413C8bE1F98e23b3663504Bbe591D",
  },
};

export function getContract(chainId, name) {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }
  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }
  return CONTRACTS[chainId][name];    
}

export const XGMT_EXCLUDED_ACCOUNTS = [
  "0x330eef6b9b1ea6edd620c825c9919dc8b611d5d5",
  "0xd9b1c23411adbb984b1c4be515fafc47a12898b2",
  "0xa633158288520807f91ccc98aa58e0ea43acb400",
  "0xffd0a93b4362052a336a7b22494f1b77018dd34b",
];
