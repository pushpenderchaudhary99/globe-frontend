import React from "react";
import SearchUser from "./SearchUser";
import SuggestedUserCard from "./SuggestedUserCard";
import { Card } from "@mui/material";

const HomeRight = () => {
  return (
    <div className="pr-5 ">
      <div className="pt-2 pb-2">
        <SearchUser className="" />
      </div>

      {/* Suggested users */}
      <Card className="p-5">
        <div className="flex justify-between py-5 items-center">
          <p className=" font-semibold opacity-70">Suggessions for you</p>
          <p className=" text-xs font-semibold opacity-90">View all</p>
        </div>

        <div className="">
          {[1, 2, 3, 4, 5].map((user) => (
            <SuggestedUserCard key={user} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
