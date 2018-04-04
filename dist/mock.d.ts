/**
 * @description base class for the spec to mock data objects
 */
export declare abstract class Mock<T> {
    abstract mockOne(): T;
    mockMany(num?: number): T[];
    genOverRange(max?: number): T[];
    protected genNumber(): number;
    protected genId(): string;
}
