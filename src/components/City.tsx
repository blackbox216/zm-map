import { cityNamesAndDefaultSoldiers } from "../pages/Tab1";
import TEAM from "./Team";



class City {
    name: string;
    num: number;
    team?: TEAM;
    soldiers?: number;

    constructor(name: string, num: number, team?: TEAM, soldiers?: number) {
        this.name = name;
        this.num = num;
        this.team = team;
        this.soldiers = soldiers;
    }

    isShadowTeam(): boolean {
        return !this.team || this.team === "shadow";
    }
    getTeamColor(): string {
        if (this.isShadowTeam()) return "beige";
        return this.team as string;
    }
    getTeamText(): string {
        if (this.isShadowTeam()) return "shadow";
        return '.';
    }
    getNumSoldiers(): number {
        return this.soldiers ?? 0;
    }

    toJson(): string {
        return JSON.stringify(this);
    }
    static fromJson(json: string): City {
        var obj = JSON.parse(json);
        var cachedCity = new City(obj.name, obj.num, obj.team, obj.soldiers);
        return cachedCity;
    }

    getDefaultTeam(): TEAM {
        return TEAM.SHADOW;
    }
    getDefaultSoldiers(): number {
        return cityNamesAndDefaultSoldiers[this.num-1][1] as number;
    }
    withDefaultValues(): City {
        return new City(this.name, this.num, this.getDefaultTeam(), this.getDefaultSoldiers());
    }
}

export default City;