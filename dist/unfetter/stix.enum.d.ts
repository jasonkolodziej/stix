/**
 * @description extends core stix entity types to include customer unfetter stix entity types
 * Note we cannot extend a typescript string enum @see https://github.com/Microsoft/TypeScript/issues/17592
 * However we can use union types
 * @example ```
 *  type StixNames = StixEnum | StixCoreEnum;
 *  let t1: StixName = StixEnum.SENSOR;
 *  let t2: StixName = StixCoreEnum.INDICATOR;
 * ```
 */
export declare enum StixEnum {
    ASSESSMENT = "x-unfetter-assessment",
    ASSESSMENT_GROUP = "x-unfetter-assessment-group",
    ASSESSMENT_SET = "x-unfetter-assessment-set",
    CAPABILITY = "x-unfetter-capapbility",
    OBJECT_ASSESSMENT = "x-unfetter-object-assessment",
    SENSOR = "x-unfetter-sensor",
}
