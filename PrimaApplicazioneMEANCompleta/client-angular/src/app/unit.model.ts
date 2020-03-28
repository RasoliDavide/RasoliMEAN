export class Unit
{
    Unit: String;
    Cost: String;
    Hit_Speed: String;
    Speed: String;
    Deploy_Time: String;
    Range: String;
    Target: String;
    Count: String;
    Transport: String;
    Type: String;
    Rarity: String;
    
    constructor(Unit: String,
        Cost: String,
        Hit_Speed: String,
        Speed: String,
        Deploy_Time: String,
        Range: String,
        Target: String,
        Count: String,
        Transport: String,
        Type: String,
        Rarity: String)
        {
            this.Unit = Unit;
            this.Cost = Cost;
            this.Hit_Speed = Hit_Speed;
            this.Speed = Speed;
            this.Deploy_Time = Deploy_Time;
            this.Range = Range;
            this.Target = Target;
            this.Count = Count;
            this.Transport = Transport;
            this.Type = Type;
            this.Rarity = Rarity;
        }
}