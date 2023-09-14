const ConvertToHTML = (stringTemplate) => {
    const parser = new DOMParser()
    const html = parser.parseFromString(stringTemplate, 'text/html')
    const view = html.body
    return view
}

export default ConvertToHTML
