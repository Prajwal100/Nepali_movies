class SearchFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  pagination(resultPerPage) {
    const currentPage = Number(this.queryString.page) || 1;
    const skipItems = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skipItems);
    return this;
  }
}

module.exports = SearchFeatures;
