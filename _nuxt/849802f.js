(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{200:function(e,t,n){"use strict";n.r(t);var o={components:{Layout:n(172).a}},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"undefined",description:"undefined",keywords:"undefined",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/plasma/transferWithSignature.md"}},[n("h1",{attrs:{id:"transferwithsignature"}},[e._v("Transfer with Signature")]),e._v(" "),n("pre",[n("code",{staticClass:"js language-js"},[e._v("matic.transferWithSignature(sig, toSell, toBuy, orderFiller)\n")])]),e._v(" "),n("p",[e._v("Executes "),n("a",{attrs:{href:"https://github.com/maticnetwork/contracts/blob/a9b77252ece25adcd3f74443411821883bb970e6/contracts/child/BaseERC20.sol#L35"}},[e._v("transferWithSig")]),e._v(" on child token (erc20/721). Takes input as signature generated from "),n("code",[e._v("matic.getTransferSignature")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("sig")]),e._v(": signature generated with matic.getTransferSignature")]),e._v(" "),n("li",[n("code",[e._v("toSell")]),e._v(": object")]),e._v(" "),n("li",[n("code",[e._v("token")]),e._v(": address of token owned,")]),e._v(" "),n("li",[n("code",[e._v("amount")]),e._v(": amount/tokenId of the token to sell,")]),e._v(" "),n("li",[n("code",[e._v("expiry")]),e._v(": expiry (block number after which the signature should be invalid),")]),e._v(" "),n("li",[n("code",[e._v("orderId")]),e._v(": a random 32 byte hex string,")]),e._v(" "),n("li",[n("code",[e._v("spender")]),e._v(": the address approved to execute this transaction")]),e._v(" "),n("li",[n("code",[e._v("toBuy")]),e._v(": object")]),e._v(" "),n("li",[n("code",[e._v("token")]),e._v(": address of token to buy")]),e._v(" "),n("li",[n("code",[e._v("amount")]),e._v(": amount/tokenId of token to buy")]),e._v(" "),n("li",[n("code",[e._v("orderFiller")]),e._v(": address of user to transfer the tokens to")]),e._v(" "),n("li",[n("code",[e._v("options")]),e._v(" see "),n("a",{attrs:{href:"#approveERC20TokensForDeposit"}},[e._v("more infomation here")])]),e._v(" "),n("li",[n("code",[e._v("from")]),e._v(": the approved spender in the "),n("code",[e._v("toSell")]),e._v(" object by the token owner")])]),e._v(" "),n("p",[e._v("transfers "),n("code",[e._v("toSell.token")]),e._v(" from "),n("code",[e._v("tokenOwner")]),e._v(" to "),n("code",[e._v("orderFiller")])]),e._v(" "),n("pre",[n("code",{staticClass:"javascript language-javascript"},[e._v("// sell order\nlet toSell = {\n  token: token2,\n  amount: value2,\n  expiry: expire,\n  orderId: orderId,\n  spender: spender,\n}\n\n// buy order\nlet toBuy = {\n  token: token1,\n  amount: value1,\n}\n\nlet sig = await matic.getTransferSignature(toSell, toBuy, { from: tokenOwner })\n\nconst tx = await matic.transferWithSignature(\n  sig, // signature with the intent to buy tokens\n  toSell, // sell order\n  toBuy, // buy order\n  orderFiller, // order fulfiller\n  {\n    from: spender, // approved spender\n  }\n)\n")])]),e._v(" "),n("hr")])}),[],!1,null,null,null);t.default=component.exports}}]);