<report>
    {
        for $item in //book
        where starts-with($item/bookInfo/PSMID, 'eapb_mon_145')
        for $language in $item/bookInfo/language
        order by $item/bookInfo/PSMID, $language
        return
            <row psmid="{$item/bookInfo/PSMID/text()}" ISO-639-1="{$language/@ISO-639-1/string()}" ISO-639-2="{$language/@ISO-639-2/string()}" primary="{$language/@primary/string()}">{$language/text()}</row>
    }
</report>