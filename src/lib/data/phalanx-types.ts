export interface Data {
    patch: Patch;
    armours: {
        [id: string]: Armour;
    };
    weapons: {
        [id: string]: Weapon;
    };
    lantern_cores: {
        [id: string]: LanternCore;
    };
    perks: {
        [id: string]: Perk;
    };
}

export interface Patch {
    name: string;
    version: {
        major: number;
        minor: number;
        patch: number;
    };
}

export interface TranslatableString {
    [langIdent: string]: string;
}

export type ArmourType = "head" | "torso" | "arms" | "legs";

export type Element = "blaze" | "frost" | "shock" | "terra" | "umbral" | "radiant";

export type Stat = "might" | "critical" | "speed" | "vitality" | "defense" | "endurance";

export interface PerkSet {
    [perkId: string]: number;
}

export interface Armour {
    id: number;
    name: TranslatableString | null;
    type: ArmourType;
    icon: string | null;
    element: Element;
    cell_slots: number;
    stats: {
        min_level: number;
        perks: PerkSet;
    }[];
}

export type WeaponType =
    | "sword"
    | "axe"
    | "hammer"
    | "war_pike"
    | "chain_blades"
    | "ostian_repeaters"
    | "aether_strikers";

export interface Weapon {
    id: number;
    name: TranslatableString | null;
    type: WeaponType;
    icon: string | null;
    element: Element;
    special: WeaponAbility | null;
    active: WeaponAbility | null;
    passive: WeaponAbility | null;
    talents: (WeaponTalent | null)[];
}

export type WeaponAbility = {};

export type WeaponTalent = {};

export type PerkType = "alacrity" | "brutality" | "finesse" | "fortitude" | "insight";

export interface Perk {
    id: number;
    name: TranslatableString | null;
    type: PerkType;
    effect: string;
    values: ValuesType[];
    threshold: number;
}

export type ValuesType = ValuesTypeStat | ValuesTypeCustom;

export interface ValuesTypeStat {
    name: string;
    type: "stat";
    stat: Stat;
    value: number;
}

export interface ValuesTypeCustom {
    name: string;
    type: "custom";
    value: number;
}

export interface LanternCore {
    id: number;
    name: TranslatableString | null;
    icon: string | null;
    active_icon: string | null;
    active_cooldown: number | null;
    active: LanternCoreAbility | null;
    passive: LanternCoreAbility | null;
}

export interface LanternCoreAbility {
    title: TranslatableString | null;
    description: TranslatableString | null;
    values: ValuesType;
}
