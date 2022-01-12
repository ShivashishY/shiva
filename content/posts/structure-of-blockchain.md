---
date: 2022-01-05
title: What is the structure of Blockchain? Explained.


template: post
hidden: false


slug: structure of blockchain
  
tags:
-   blockchain
-   structure
-   crypto
-   technology
---
<!-- more -->


<!-- more -->


## Structure

A blockchain is a decentralized, distributed, and often public, digital ledger that contains records called blocks that are used to record transactions across multiple computers so that any included block is subject to the transformation of all subsequent blocks. Cannot be changed without retrospectively. It allows participants to verify and audit transactions independently and relatively inexpensively. A blockchain database is managed autonomously using a peer-to-peer network and a distributed time-stamping server. They are evidenced by collective cooperation driven by collective interests. Such a design facilitates robust workflows where participants' uncertainty about data security is modest. The use of a blockchain removes the feature of infinite reproducibility from a digital asset. This confirmed that each unit of value was transferred only once, solving the long-standing problem of double-spending. A blockchain is described as a price-exchange protocol. A blockchain can keep title rights because, when properly set up to detail the exchange agreement, it provides a record that compels offer and acceptance.

Logically, a blockchain can be viewed as comprising several layers:


- Infrastructure (hardware)
- Networking (node ​​discovery, information dissemination, and verification)
- Consensus (proof of work, proof of stake)
- Data (block, transaction)
- Application (smart contract/decentralized application, if applicable)

## Blocks

Blocks comprise batches of valid transactions that are hashed and encoded in a Merkle tree. Each block comprises a cryptographic hash of the previous block in the blockchain, linking the two. The connected blocks form a chain. This iterative process verifies the integrity of the previous block, the initial block, known as the genesis block. To assure the integrity of a block and the data contained, the block is usually digitally signed. 

Sometimes separate blocks can be produced concurrently by creating a temporary fork. Besides a secure hash-based history, any blockchain has a specified algorithm for scoring different versions of the history so that the one with the higher score can be chosen over the others. Blocks not selected to include in the chain are called orphan blocks. The peers backing the database have different versions of the history from time to time. They keep only the highest-scoring version of the database known to themselves. 

Whenever a peer receives a high-scoring version (usually an older version with a new block added) they expand or overwrite their own database and retransmit the correction to their peers. There is never an absolute guarantee that a particular entry will remain in the best version of history forever. Blockchains are usually built to add scores to the new blocks over the old ones and are motivated to expand with new blocks rather than overwriting the old ones. Therefore, the probability of replacing an entry drops sharply as more blocks are built on top of it, eventually becoming much less. For example, bitcoin uses a proof-of-work system, where the chain with the most cumulative proof-of-work is valid by the network. There are several methods that can be used to demonstrate a sufficient level of computation. Computation is performed redundantly within a blockchain rather than in a traditional separate and parallel way.

## Block time

Block time is the average time it takes for the network to generate an additional block in the blockchain. Some blockchains create a new block every five seconds. By the time the block is completed, the data involved becomes verifiable. In cryptocurrency, this practically happens when a transaction occurs, so shorter block times mean faster transactions. The block time for Ethereum has been set between 14 and 15 seconds, while for Bitcoin it is an average of 10 minutes.

## Hard fork

A hard fork is a rule change, such that software valid according to the old rules will see the blocks built according to the new rules as invalid. With a hard fork, all the nodes operating as per the new rules are required to upgrade their software. If a group of nodes continues to use the old software while other nodes use the new software, a permanent split may occur.

For example, Ethereum has worked hard to “make whole” investors in The DAO, which was hacked by exploiting a vulnerability in its code. Here, the fork resulted in the split of the Ethereum and Ethereum Classic chains. In 2014, the Nxt community was asked to consider a hard fork that could lead to a rollback of blockchain records to mitigate the effects of the theft of 50 million NXT from a major cryptocurrency exchange. The hard fork proposal was rejected, and some of the money was recovered after negotiation and payment of the ransom. Alternatively, to prevent permanent splitting, most nodes using the new software may revert to the old rules, as with the bitcoin split on 12 March 2013.

Another recent hard-fork example is that of bitcoin in 2017, which resulted in the bitcoin cash split. The network split was mainly because of disagreements over how to increase transactions per second to accommodate demand.

## Decentralization

By storing data in its peer-to-peer network, blockchain eliminates many of the risks that come with keeping data centrally. Decentralized blockchain can use ad hoc message passing and distributed networking. One risk of a lack of decentralization is a so-called “51% attack” where a central entity can gain control of more than half the network and manipulate that specific blockchain record at will, allowing double-spending.

Peer-to-peer blockchain networks lack centralized points of vulnerability that computer crackers can exploit; Similarly, it has no central point of failure. Blockchain security methods include the use of public-key cryptography. 5  A public key (a long, random-looking string of numbers) is an address on the blockchain. Value tokens sent across the network are recorded as belonging to that address. A private key is like a password that gives its owner access to their digital assets or otherwise a means to interact with the various capabilities that blockchains now support. Data stored on a blockchain is not considered corrupt.

Each node of the decentralized system has a copy of the blockchain. Data quality is largely maintained by database replication and computational trust. No centralized "official" copy exists, and no user is more "trusted" than any other. Transactions are broadcast over the network using the software. Messages are delivered on a best-effort basis. Mining nodes validate transactions, add them to the blocks they are creating, and then broadcast the completed blocks to other nodes. 08  Blockchains use various time-stamping schemes, such as proof-of-work, to serialize changes. Alternative consensus methods include proof-of-stake. The development of a decentralized blockchain comes with the risk of centralization as the computer resources required to process large amounts of data become more expensive.

## Openness

Open blockchains are more user-friendly than some traditional ownership records, which require physical access to be viewed while still open to the public. Since all early blockchains were permission less, there has been controversy over the definition of a blockchain. One issue in this ongoing debate is whether a private system with validatory allowed and allowed (permissioned) by a central authority should be considered a blockchain. Proponents of permissioned or private chains argue that the term "blockchain" can be applied to any data structure that batches data into time-stamped blocks. These blockchains work as a distributed version of Multi Version Consideration Control (MVCC) in the database. Just as MVCC prevents two transactions from modifying the same object in a database concurrently, the blockchain prevents two transactions from spending the same output on a blockchain. Opponents say that the licensed systems resemble traditional corporate databases, do not support decentralized data verification, and such systems are not strictly against operator tampering and modification. Computer world Nikolai Hampton said that "many in-house blockchain solutions will be nothing more than cumbersome databases," and that "without a clear security model, proprietary blockchains should be viewed with suspicion.

## Permission Lessness

An advantage to an open, permissionless, or public blockchain network is that there is no need for protection against poor actors and no access control required. This means that applications can be added to the network without the approval or trust of others, by using the blockchain as the transport layer.

Bitcoin and other cryptocurrencies currently secure their blockchains by requiring new entries to include proof of work. To prolong the blockchain, bitcoin uses the hashcash puzzle. While hashcash was designed by Adam Back in 1997, the original idea was first proposed by Cynthia Dwork and Moni Naor, and Eli Poniatowski in their 1992 paper "Pressing through Processing or Combatting Junk Mail".

In 2016, venture capital investment for blockchain-related projects was weakening in the United States but was increasing in China. Bitcoin and many other cryptocurrencies use open (public) blockchains. As of April 2018, the market capitalization of bitcoin is the highest.

Permissioned blockchains use an access control layer to control who has access to the network. Unlike public blockchain networks, validators on private blockchain networks are verified by the network owner. They do not rely on anonymous nodes to validate transactions, nor do they benefit from network effects. Permitted blockchains may also be known as 'consortium' blockchains. A certain level of decentralization, if carefully designed, contrasts with permissionless blockchains, which are often centralized in practice.

## Disadvantages of Private Blockchain

Nikolai Hampton told the Computer world that “there is also no need for a ‘51 percent attack on private blockchains, as private blockchains (most likely) already control 100 percent of all block creation resources. If you can attack or damage blockchain creation tools on a private corporate server, you can effectively control 100 percent of their network and alter transactions however you want. This has profound adverse effects during times of financial crises or debt crises such as the financial crisis of 2007–08, where politically powerful actors may make decisions that favor certain groups at the expense of others, and "Bitcoin". The blockchain is largely protected by conglomerate mining efforts. It is unlikely that any private blockchain will try to protect records using gigawatts of computing power–this is time-consuming and expensive.” He also said, “There is also no 'race' within a private blockchain; There is no incentive to use more power or find blocks faster than competitors. This means that many in-house blockchain solutions will be nothing more than cumbersome databases.

## Blockchain Analysis

Analysis of public blockchains has become increasingly important with the popularity of Bitcoin, Ethereum, Litecoin, and other cryptocurrencies. A blockchain, if it is public, is accessible to anyone who wishes to observe and analyze on-chain data, provided that it has the information. Understanding and accessing the flow of crypto has been a problem for many cryptocurrencies, crypto exchanges, and banks. This is because of allegations of blockchain-enabled cryptocurrencies enabling illegal black market trading of drugs, weapons, money laundering, etc. A common belief has been that cryptocurrency is private and untraceable, thus prompting many actors to use it for illegal purposes. This is changing and now specialized tech companies provide blockchain tracking services, making crypto exchanges, law enforcement, and banks more aware of what is happening with crypto funds and fiat-crypto exchanges. Some argue that the development has prompted criminals to prioritize the use of newer cryptos, such as Monero. The question is about public access to blockchain data and individual privacy of the same data. This is an important debate in cryptocurrency and ultimately blockchain.

## Standardization

There is an increasing industrial need for blockchain standards, as interoperability is critical for widespread adoption. Blockchain technologies show great potential because they provide capabilities that normally cannot be accomplished in any other way if the interoperability requirement between blockchain and other technologies is met.

 

In April 2016, Standards Australia submitted a proposal to the International Organization for Standardization to consider developing standards to support blockchain technology. This proposal resulted in creating ISO Technical Committee 307, Blockchain and Distributed Ledger Technologies. The technical committee included blockchain terminology, reference architecture, security and privacy, identity, smart contracts, governance, and interoperability for blockchain and DLT, as well as There, are working groups dealing with specific standards for industry sectors and general government requirements. Over 50 countries are taking part in the standardization process, with external links such as the Society for Worldwide Interbank Financial Telecommunication (SWIFT), the European Commission, the International Federation of Surveyors, the International Telecommunication Union (ITU), and the United Nations Economic Commission for Europe (UNECE).

Several other national standards bodies and open standards bodies are also working on blockchain standards. These include the National Institute of Standards and Technology (NIST), the European Committee for Electrotechnical Standardization (ECES), the Institute for Electrical and Electronics Engineers (IEEE), the Organization for the Advancement of Structured Information Standards (OASIS), and the Internet. Engineering Task Force (ETF).




