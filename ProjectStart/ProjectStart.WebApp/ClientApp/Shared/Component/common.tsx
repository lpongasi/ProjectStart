export enum StateLifeCycle {
  Started = ('STARTED') as any,
  Success = ('SUCCESS') as any,
  Error = ('ERROR') as any,
  End = ('END') as any
}

export type ActionTypes  = {
  Started: string,
  Success: string,
  Error: string,
  End: string,
};

export const CreateStateAction = (statePrefix: string): ActionTypes => ({
  Started: `${statePrefix}_${StateLifeCycle.Started}`,
  Success: `${statePrefix}_${StateLifeCycle.Success}`,
  Error: `${statePrefix}_${StateLifeCycle.Error}`,
  End: `${statePrefix}_${StateLifeCycle.End}`,
});

let generatedID = 0;
export const GenerateId = () => generatedID++;
