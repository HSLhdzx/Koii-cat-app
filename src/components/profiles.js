import React from "react";

function formatRank(index) {
    const j = index % 10,
          k = index % 100;
    if (j === 1 && k !== 11) {
      return index + "st";
    }
    if (j === 2 && k !== 12) {
      return index + "nd";
    }
    if (j === 3 && k !== 13) {
      return index + "rd";
    }
    return index + "th";
  }

export default function profiles({ Leaderboard }) {
  return (
    <div className="flex flex-col pt-10" id="profile">
      {Item(Leaderboard)}
    </div>
  );
}

function Item(data) {
  return (
<>
  {data.map((value, index) => (
    <div className="flex flex-wrap justify-between items-center" key={index}>
      <div className="flex items-center">
        {/* Rank */}
        <span className="font-bold mr-4">{formatRank(index + 1)}</span>

        {/* Image */}
        <img
          className="max-w-[100px] max-h-[100px]"
          src={value.img}
          alt={value.name} // It's good practice to provide a meaningful alt text
        />
      </div>

      {/* Info */}
      <div className="info">
        <h3 className="name text-dark">{value.name}</h3>
        <span>{value.walletAddress}</span>
      </div>

      {/* Score */}
      <div className="item">
        <span>{value.score}</span>
      </div>
    </div>
  ))}
</>
  );
}
