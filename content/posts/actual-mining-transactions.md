---
date: 2022-01-06
title: How does actual mining of transactions take place?

template: post
hidden: false


slug: actual mining transactions
  
tags:
-   blockchain
-   mining
-   crypto
-   technology
-   transactions
---
<!-- more -->


<!-- more -->


## How does bitcoin mining work?

Cryptocurrency mining is laborious, expensive, and only sporadically rewarded. However, mining has a magnetic draw for many investors interested in cryptocurrencies. It could be that typified mining as pennies from heaven, like the gold prospects of California in 1848. And if you're technically inclined, why not do it? 

Well, before you invest the time and equipment, read this post to see if mining is really for you or not. We will primarily focus on bitcoin.

## Why should I care?

By mining, you can get cryptocurrency without having to put money into it. That said, of course you don't have to be a miner for crypto. You can use counterfeit currency (USD, EUR, JPY, etc.) You can trade it on an exchange like Bitstamp using other cryptos (e.g. using Ethereum or NEO to buy bitcoins) You can also play video games or publish blog posts on platforms that pay their users in crypto. An example of the latter is Steemit, which is like Medium, except that the user uses Stem to Blogger. You can reward by paying in a proprietary cryptocurrency called Steem. This can then be traded elsewhere for bitcoin.

Miners wallets, mining performs a second fundamental task: it is the only way to issue new cryptocurrency into circulation. Miners are basically running out. For example, as of the time of writing this piece, there were around 16 million bitcoins in circulation. Except for the coin through the Genesis block (the very first block created by Bitcoin founder Satoshi Nakamoto himself), every single bitcoin came from them because of miners. In the absence of miners, Bitcoin would still exist and be usable, but there would be no additional bitcoins. There will come a time when Bitcoin mining ends; According to the bitcoin protocol, the number of bitcoins will be limited to 21 million.

## How much can miners earn from bitcoin mining?

A block reward refers to the number of bitcoins you get if you successfully mine a block of the currency. The amount of the reward halves after the creation of every 210,000 blocks, or roughly every four years. The amount is expected to hit zero around 2140

When bitcoin was first mined in 2009, mining a block would earn you 50 BTC. In 2012, it was halved by 25 BTC. In 2016, it halved from the current level of 12.5 BTC. In 2020, the reward size will drop again to 6.25 BTC.

If you want to track exactly when these rings happen, you can consult the Bitcoin Clock, which updates information in real-time.



## How many blocks have been mined so far?

Several sites, including Blockchain.info, will provide youth information in real-time. At the time of writing, we are on block #717409.

## What are miners doing that is so important that they get free bitcoin?

The miners are being paid for their work, as auditors are working to verify past bitcoin transactions. The conference is intended to keep bitcoin users honest and was conceived by the founder of bitcoin, Satoshi Nakamoto. By verifying transactions, miners are helping to prevent the problem of double-consumption.

Double spending means, as the name suggests, that a Bitcoin user dishonestly spends twice the amount of money. With physical currency, that's not a problem: once you greenback a $20 bill to buy a bottle of vodka, you don't have it anymore, so there's no risk that you'll lose the next $20 in the lotto. Can buy tickets. With digital currency, however, as the dictionary explains, there is a risk that the holder could copy the digital token and send it to a merchant or another party while retaining the original.

Let's say there was a legal $20 and a really good photocopy of $20. If someone tried to expend both the real bill and the fake one, someone who bothered looking at the serial numbers of the bills would see that They were the same number, and one of them must be false. Whether a bitcoin miner is consistent, check transactions to make sure users don't spend bitcoin twice. This is not a complete analogy, which will be explained in more detail below.

Once a miner has verified 1 MB (megabyte) worth of bitcoin transactions, they are eligible to win BTC. The 1 MB limit was set by Satoshi Nakamoto and is a matter of contention, as some miners believe that the block size should be increased to accommodate more data.

Note that I said that 1 MB worth of transactions is a minimum qualification for every person who confirms a transaction to earn bitcoins.

A 1 MB transaction can theoretically be as small as 1 transaction (though this is not all that common) or several thousand, depending on how much data the transaction takes up.

## So after all the work of verifying the transaction, I still won't get any bitcoin for it?
This is right.

To earn bitcoins, you have to meet two conditions. One is a matter of effort, one is a matter of luck.

1) You have to verify transactions worth ~1 MB. This is the easy part.

2) You must be the first to arrive at the correct answer to a numerical problem. This process is also known as proof of work.

## What do you mean, the correct answer to a numerical problem?

**The good news**: There's no advanced math or calculations involved. You may have heard that miners are solving a mathematical problem. This is not quite true. What they're actually doing is trying to get the first miner to come up with a 64-digit hexadecimal number (ah) that is less than or equal to the target hash. This is basically guesswork.

**The bad news**: Because it's the wrong thing to do, you need a lot of computing power to get the first one. To successfully mine, you require the hash rate, which is measured in terms of megahasper second (MH/s), gigahashes per second (GH/s), and terahashes per second (TH/s).

That's a lot of hashes.

If you want to estimate how much bitcoin you can make with your mining rig's hash rate, the site CryptoCompare offers a useful calculator.

## What equipment do I need?

Either a GPU (Graphics Processing Unit) miner or an application-specific integrated circuit (ASIC) miner. These can range from $500 to thousands. For some minerals, especially Ethereum miners, individual graphics cards allow mining processes in a low-cost way. Note the twist ties of the sandwich, which holds the graphics card in the metal pole. This is probably not the most efficient way to mine, and as you can guess, many miners are just as much for the fun and the challenge as they are for the money.


For example, the ELI5 version of Bitcoin miners
Example: I tell three friends that I am thinking of a number between 1 and 100, and I write that number on a piece of paper and seal it in an envelope. My friends don't have to guess the exact number. They have to be the first to guess any number, which is what I'm thinking. And there's no limit to how many guesses they get.

Let's say I'm thinking of number 1. If friends guess a 21, then they lose because 21 and 19 If friend B guesses 16 and friend C guesses 12, then they both arrive at a theoretically feasible answer, because 16, 19 and 12. There is no additional credit for 19 friends B, even though B answer was closer to the answer of target 19.

If both B and C answer together, then ELINA LLG breaks up.

In bitcoin terms, there are often simultaneous answers, but there can be only one winning answer. When multiple simultaneous answers are submitted that are equal to or less than the target number, the bitcoin network will be a simple majority to decide 51% which miner is going to honor. Usually, it is the miner who has done the most work, i.e. verifying most of the transactions. The losing block then becomes the unknown block.

Now think about what number I'm thinking of, but I'm not just asking three friends, and I'm not thinking of numbers between 1 and 100. Instead, I'm looking for a million towers. And I'm thinking of a 64-digit hexadecimal number. Now you see that it is getting very difficult to guess the correct answer.

## The hell is this a 64-digit hexadecimal number?

OK, here's one:

0000000000000000057fcc708cf0130d95e27c5819203e9f967ac56e4df598ee

The number above has 64 digits, yet is quite easy to understand. As you've probably noticed, that number includes not only numbers but letters of the alphabet as well. Why is it like this?

To understand what these letters are doing in between, let's open the word hexadecimal.

As you know, we use the Decimal System, which means base 10. This means that every digit has 10 possibilities, 0-9. If you're not familiar with these, let me be cautious:

0 1 2 3 4 5 6 7 8 9

Hexadecimal means base 16, axioms derived from a Greek word for 10 and 10 from the Greek word for. In a hexadecimal system, each digit has 16 possibilities, but in our numeric system, only 10 ways of representing numbers are provided (0-9). Therefore, you have to hide the letters, especially the letters A, B, C, D, E, and F. In the hexadecimal system, these are the values of each digit:

## Thank you very much, so what does discrimination have to do with mining 64-digit hexadecimal numbers?

Remember that where I wrote the number 19 on a piece of paper and put it in a sealed envelope?

With bitcoin mining, that figurative number in the envelope is called the target hash.

Which miners are doing what with these giant computers and dozens of cooling fans are aiming at the hash. Miners generate these guesses randomly as many annexes as possible, as quickly as possible. A non-reduced number is only used once, and I'm talking about these to make these 64-bit hexadecimal numbers. In bitcoin mining, there are 32 bits in size smaller than the goose, which is 256 bits. The first miner who makes a hash of no hash less than or equal to the target hash is awarded credits for completing that block and is awarded 12.5 BTC of loot. The only goal you can achieve in theory is to roll a 16-sided die 64 times to come up with a random number.

## OK, so how do I guess at the target hash?
All target hashes start with zeros at least eight, and zeros above 63.

There is no minimum target, but there is a maximum target set by the bitcoin protocol. No target can be greater than this number:<00 p>

00000000ffff000000000000000000000000000000000000000000000000000000000000000000000000000000


## How can I maximize my chances of guessing the target hash before anyone else?

Get faster mining rigs or, more realistically, join a group of miners pool that combine their computing power and split to mining bitcoins. Mining pools are equivalent to those of Powerwall clubs, whose members collectively buy lottery tickets and agree to share any winnings. A larger number of blocks have actually been consumed than individual miners.

It really is a numbers game. You cannot guess the pattern or make predictions based on previous target hashes. Cryptocurrency difficulty is a measure of how difficult it is to mine a block in a blockchain for a particular cryptocurrency. A high cryptocurrency difficulty means it takes additional computing power to verify transactions entered on a blockchain.

The hexadecimal figure decimal equivalent 00 11 22 33 44 55 66 77 88 99 A 10 B 11 C 12 D 13 E 14 F 15 P. If you're mining bitcoin, you'll need that 64-digit number. There is no need to calculate the total value of the number (hash). I repeat: you don't need to calculate the total value of a hash.

## How can I decide if Bitcoin will be beneficial for me?

The site CryptoCompare is a useful calculator that allows you to plug in numbers such as your hash speed, electricity cost, etc. 

## I've done the math. Forget mining. Is there a less serious way to profit from the crypto boom?

Of course, as discussed, the easiest way to acquire bitcoin is to buy it on an exchange like coinbase.com. Alternatively, you can always take advantage of the pickaxe strategy. It is based on the old one that during the California gold rush of 1848, the smart investment was not to pan for gold but to use the pickaxe to mine. Or, to put it in modern terms, invest in the companies that manufacture those pickaxes. In the crypto context, the pickaxe equivalent would be a company that manufactures equipment used for bitcoin mining. You can see companies that are ASIC miners or GPU miners.

Companies that manufacture these products include AMD and Nvidia.




