import { Fields as FieldsCar } from "../../App.type";

export interface PriceBoxType {
    data: FieldsCar[]
}

export interface Discountdata {
  metadata: Metadata
  sys: Sys
  fields: Fields
}

export interface Metadata {
  tags: any[]
}

export interface Sys {
  space: Space
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment
  revision: number
  contentType: ContentType
  locale: string
}

export interface Space {
  sys: Sys2
}

export interface Sys2 {
  type: string
  linkType: string
  id: string
}

export interface Environment {
  sys: Sys3
}

export interface Sys3 {
  id: string
  type: string
  linkType: string
}

export interface ContentType {
  sys: Sys4
}

export interface Sys4 {
  type: string
  linkType: string
  id: string
}

export interface Fields {
  amount: number
  code: string
}
