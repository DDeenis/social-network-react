export function createPages(pagesCount, currentPage, pageSize = 10) {
    const pages = [];

    if(pagesCount > pageSize) {
        if(currentPage > Math.ceil(pageSize / 2)) {
            for (let i = currentPage - Math.floor(pageSize / 2); i <= currentPage + Math.ceil(pageSize / 2); i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= pageSize; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }

    return pages;
}