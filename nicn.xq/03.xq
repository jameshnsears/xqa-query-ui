(: substring == functx :)

for $item in //issue
where $item/metadatainfo/da/year = "1994"
        and $item/metadatainfo/dw != "Sunday"
return
    <result>
        {$item/metadatainfo/PSMID}
        {$item/metadatainfo/dw}
        <dw3>{substring($item/metadatainfo/dw, 1, 3)}</dw3>
        <pageCount>{count($item/page)}</pageCount>
    </result>