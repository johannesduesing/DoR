export default interface Reuse {
  sourceDOI: string,
  type : ReuseType,
  comment: string,
  sourceReference: string,
  reusedDOI: string,
  alternativeID: string,
  sourceReferenceDetail: string,
  contributor: string
}

export enum ReuseType {
  UNKNOWN = "Other",
  METHODOLOGY = "Methodology",
  DATASET = "Dataset",
  TOOL = "Tool",
  STATISTICS = "Statistics",
  METRIC = "Metric",
  SANITYCHECK = "Sanity check",
  STEPPINGSTONE = "Stepping stone",
  REPLICATION = "Replication"
}

export enum ReuseTypeFilterAdditions {
  ALL = "All"
}

export type ReuseTypeFilter = ReuseType | ReuseTypeFilterAdditions

export function ReuseFromJson(json: any): Reuse {
  if ((json === undefined) || (json === null)) {
    return json;
  }
  return {
    "sourceDOI": json['sourceDOI'],
    "type" : json['type'],
    "comment": json['comment'],
    "sourceReference": json['sourceReference'],
    "reusedDOI": json['reusedDOI'],
    "alternativeID": json['alternativeID'],
    "sourceReferenceDetail": json['sourceReferenceDetail'],
    "contributor" : json['contributor']
  };
}


export function ReuseToJson(value? : Reuse) : any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    "sourceDOI": value.sourceDOI,
    "reusedDOI": value.reusedDOI,
    "type" : value.type,
    "comment": value.comment,
    "sourceReference": value.sourceReference,
    "alternativeID": value.alternativeID,
    "sourceReferenceDetail": value.sourceReferenceDetail,
    "contributor" : value.contributor
  };
}