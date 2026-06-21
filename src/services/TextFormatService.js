export class TextFormatService {
  static insertRichText(text) {
    /**
     *  INSTRUCTIONS:
     * Any desired rich text MUST NOT include a <SPACE> character.
     * Use '$' to identify beginning of rich text.
     *  '*' identifies a <strong> word
     *  '%' identifies an <em> word
    */ 
    const textAsArray = text.split('$');
    const richText = textAsArray.map((token) => {
      switch (token[0]) {
        case "*":
          token = '<strong>' + token.replaceAll('*', '') + '</strong>'
          break;
        case "%":
          token = '<em>' + token.replaceAll('%', '') + '</em>'
          break;
      }
      return token;
    });
    return richText.join('');
  }
}