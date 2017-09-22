for $item in //book
return
    <result>
        <PSMID>{$item/bookInfo/PSMID/text()}</PSMID>
        <language>{$item/bookInfo/language/text()}</language>
        <ocr>{$item/bookInfo/language/@ocr/string()}</ocr>
        <primary>{$item/bookInfo/language/@primary/string()}</primary>
        <ISO-639-1>{$item/bookInfo/language/@ISO-639-1/string()}</ISO-639-1>
        <ISO-639-2>{$item/bookInfo/language/@ISO-639-2/string()}</ISO-639-2>
    </result>