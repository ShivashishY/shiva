---
date: 2022-01-07
title: What is UTXO in Bitcoin and how does it affect transactions?

template: post
hidden: false


slug: utxo in bitcoin
  
tags:
-   blockchain
-   utxo
-   crypto
-   technology
-   bitcoing
-   transactions
---
<!-- more -->


<!-- more -->


## What is UTXO?

Contrary to popular belief, bitcoin is not a system of accounts and balances. Instead, the network keeps track of these things called UTXO. A UTXO stands for Unspent Transaction Output, but UTXO is simply an amount of bitcoin that's assigned to a bitcoin address, and it could be any amount of bitcoin as long as it's at least one satoshi. 

## Understanding UTXO by using cash as an example. UTXO roles in a transaction.

To fully grasp how UTXO works within bitcoin, let's use cash as an example. Let's say you have a penny: a dollar and a five-dollar bill in your wallet. They represent three distinct units of currency, and you know your total balance of six dollars in a penny by adding them all together, 

You go to a store, and you buy a snack that costs 5.98. You give the cashier your dollar and your five, and you receive two pennies in return, so you have three cents left to spend okay, so how does this relate to UTXO? 

Well, let's change the units from dollars to bitcoin and, for simplicity's sake, ignore the exchange rate. You have a .01 BTC, a one BTC, and five BTC as three individual UTXO inside your wallet. Your wallet calculates your balance of 6.01 BTC by adding these UTXO together. You pay for your 5.98 BTC snack, using your one BTC UTXO, and your 5 BTC UTXO in bitcoin terms. 

We call these UTXO inputs to a transaction. The 5.98 BTC UTXO that the seller receives is known as an output. Now I’m going to assume you already know a thing or two about mining fees, so for simplicity, let's just say that the mining fees were .01 BTC, so you receive a .01 BTC UTXO. As change your two UTXO inputs, your one BTC and five BTC - have been spent as inputs to this transaction, they're no longer considered unspent transaction outputs. You've now created two new unspent transaction outputs, the seller's 5.98 BTC, and your .01 BTC received a change. 

Remember, UTXO can be any amount of bitcoin. It doesn't have to be a fixed denomination like dollar bills. It just needs to be at least one satoshi, so in the end you end up with two UTXO, both at .01 BTC denominations. The way I like to think about UTXO is like this. A UTXO is the bitcoin wallets. What cash are the dollar wallets.





## Summary of UTXO

- A UTXO is just an amount of bitcoin assigned to a bitcoin address. 
- Your wallet calculates its balance by summing up the UTXO you spend.
- Your UTXO when using them as inputs to transactions, UTXO are created as outputs from a transaction even as change and finally compared to dollars which have fixed denominations like a penny a dollar, etc. 
- A UTXO can represent any amount of bitcoin as long as it's at least one satoshi.

## Using UTXO to calculate Bitcoin's money supply.

Now before we wrap here's a bonus tip, by adding together the entire bitcoin network's UTXO set, you can calculate the total circulating supply of bitcoin. You can independently verify and audit bitcoin's money supply. That's a feature that's unique to bitcoin, try doing this with the money supply of dollars.




