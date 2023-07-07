export const removeStar = `mutation {
    removeStar(input:{starrableId:"<ID>"}) {
      starrable {
        id
      }
    }
  }`;
