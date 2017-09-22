let $doc := <simple:root xmlns:simple='http://basex.org/simple'/>

let $schema :=
  <xs:schema xmlns:xs='http://www.w3.org/2001/XMLSchema' targetNamespace='http://basex.org/simple'>
    <xs:element name='root'/>
  </xs:schema>

return validate:xsd($doc, $schema)