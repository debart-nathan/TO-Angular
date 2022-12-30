import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StageService {
  registeredTeams: { id: number; name: string }[][];

  constructor() {
    this.registeredTeams = [
      [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
      ],
    ];
  }

  generateFormules(
    team_count: number
  ): Array<Array<{ size: number; count: number }>> {
    let formules: Array<Array<{ size: number; count: number }>> = [];

    for (let nbteam = 2; nbteam <= team_count; nbteam++) {
      //if you can divide the teams in a pool set of nbteam
      if (team_count % nbteam == 0) {
        formules.push([
          {
            size: nbteam,
            count: team_count / nbteam,
          },
        ]);
      } else {
        //if you can divide the teams in two pools set of nbteam and nbteam-1 by pool
        //with the second set having less pools
        if (
          (team_count % nbteam) % (nbteam - 1) == 0 &&
          team_count / nbteam > (team_count % nbteam) / (nbteam - 1)
        ) {
          formules.push([
            {
              size: nbteam,
              count: Math.floor(team_count / nbteam),
            },
            {
              size: nbteam - 1,
              count: (team_count % nbteam) / (nbteam - 1),
            },
          ]);
        }
      }
    }
    return formules;
  }

  createDistribution(
    formula: { size: number; count: number }[]
  ): { oldPool_num: number; oldTeam_num: number }[][] | null {
    if (this.registeredTeams === undefined) {
      return null;
    }
    let distrib: { oldPool_num: number; oldTeam_num: number }[][] =
      Array<Array<{ oldPool_num: number; oldTeam_num: number }>>();

    let oldPool_num: number = 0;

    let oldTeam_num: number = 0;

    //true if there is no more team that can be attributed
    let noMoreTeams = false;
    console.log(formula);
    //for all new pool types
    formula.forEach((pooltype) => {
      console.log(pooltype);
      //for all new pool in the new pool type
      for (let poolnum = 0; poolnum < pooltype.count; poolnum++) {
        console.log('poolnum', poolnum);
        let pool: { oldPool_num: number; oldTeam_num: number }[] = Array<{
          oldPool_num: number;
          oldTeam_num: number;
        }>();
        //for all teams in the new pools
        for (let teamnum = 0; teamnum < pooltype.size; teamnum++) {
          console.log('teamnum', teamnum);
          //if no more team can be attributed but the new pools aren't full
          if (noMoreTeams) {
            throw 'ERROR: Not enough teams for the distribution';
          }

          //add the current team
          pool.push({ oldPool_num: oldPool_num, oldTeam_num: oldTeam_num });

          let changePoolCount = 0;
          do {
            //pass to the next pool of the precedent stage
            oldPool_num = (oldPool_num + 1) % this.registeredTeams.length;
            //if return to the 1st pool then go the seconds teams of the pools
            if (oldPool_num == 0) {
              oldTeam_num += 1;
            }
            //if you passed all the old pools without finding a team
            console.log(this.registeredTeams.length, '<=', changePoolCount);
            if (changePoolCount >= this.registeredTeams.length) {
              console.log("true");
              break;
            }
            changePoolCount++;
            //if the old pool was already totally used pass to the next
          } while (this.registeredTeams[oldPool_num].length <= oldTeam_num);
        }
        distrib.push(pool);
        console.log('push pool:', poolnum, pool);
      }
    });

    if (noMoreTeams) {
      throw 'ERROR: Not All teams where added in the distribution';
    }

    return distrib;
  }
}
