// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingDApp {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    struct Voter {
        bool isAuthorized;
        bool hasVoted;
        uint candidateIdVotedFor;
    }

    address public electionAdmin;
    string public electionTitle;
    mapping(address => Voter) public voterRegistry;
    Candidate[] public candidateList;
    uint public voteCount;

    event VoteReceived(string candidateName, uint voteCount);
    event ElectionConcluded(string candidateName, uint voteCount);

    modifier onlyAdmin() {
        require(msg.sender == electionAdmin, "Access restricted to admin only.");
        _;
    }

    constructor(string memory title) {
        electionAdmin = msg.sender;
        electionTitle = title;
    }

    function registerCandidate(string memory candidateName) public onlyAdmin {
        candidateList.push(Candidate(candidateList.length, candidateName, 0));
    }

    function authorizeVoter(address voterAddress) public onlyAdmin {
        voterRegistry[voterAddress].isAuthorized = true;
    }

    function castVote(uint candidateId) public {
        Voter storage voter = voterRegistry[msg.sender];

        if (!voter.isAuthorized) {
            revert("You are not authorized to vote.");
        }
        if (voter.hasVoted) {
            revert("You have already voted.");
        }
        if (candidateId >= candidateList.length) {
            revert("Invalid candidate ID.");
        }

        voter.hasVoted = true;
        voter.candidateIdVotedFor = candidateId;

        candidateList[candidateId].voteCount += 1;
        voteCount += 1;

        emit VoteReceived(candidateList[candidateId].name, candidateList[candidateId].voteCount);
    }

    function concludeElection() public onlyAdmin {
        for (uint i = 0; i < candidateList.length; i++) {
            emit ElectionConcluded(candidateList[i].name, candidateList[i].voteCount);
        }

        uint totalVotes = 0;
        for (uint i = 0; i < candidateList.length; i++) {
            totalVotes += candidateList[i].voteCount;
        }
        assert(totalVotes == voteCount);

        // Reset for new use
        for (uint i = 0; i < candidateList.length; i++) {
            candidateList[i].voteCount = 0;
        }
        voteCount = 0;
    }
}
