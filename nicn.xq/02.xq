for $item in //issue
where $item/metadatainfo/da/year = "1992"
        and $item/metadatainfo/dw = "Sunday"
return
    <result>
        {$item/metadatainfo/PSMID}
        {$item/metadatainfo/dw}
        <pageCount>{count($item/page)}</pageCount>
    </result>