import { StixEnum } from "../../unfetter/stix.enum";
import { ExternalReference } from "../../stix/external_reference";

/**
 * @description a capability could represent a product, ex. AntiVirus software
 */
export class Capability {
    public name: string;
    public created = new Date().toISOString();
    public modified: string;
    public description: string;
    public external_references: ExternalReference[];
    public type: StixEnum;
    public created_by_ref: string; // identity id
    public id?: string;
}
