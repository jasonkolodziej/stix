import { ExternalReference, KillChainPhase } from '.';
import { StixCoreEnum } from '../stix/stix-core.enum';
export declare class Identity {
    id: string;
    readonly type: StixCoreEnum;
    attributes: {
        created: Date;
        modified: Date;
        version: string;
        labels: string[];
        external_references: ExternalReference[];
        kill_chain_phases: KillChainPhase[];
        name: string;
        description: string;
        identity_class: string;
        sectors: string[];
        contact_information: string;
    };
    constructor(data?: Identity);
    private createAttributes();
}
