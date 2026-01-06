export interface Player {
    id: number;
    name: string;
    skills: Skills;
    stats: PlayerStats;
    team: Team;
}

export interface Skills {
    // Scale 1 to 10
    agility: number;
    intelligente: number;
    artistic: number;
    communication: number;

}

export interface PlayerStats {
    // Scale 1 to 10
    energy: number;
    age: number;
    family: Family;
}

export interface Family {
    id: number;
    name: string;
}

export interface Team {
    id: number;
    name: string;
    color: string;
    members: Player[];
}

export interface Game {
    id: number;
    name: string;
    skillsRequired: Skills;
}