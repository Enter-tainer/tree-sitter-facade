var searchIndex = JSON.parse('{\
"tree_sitter_facade":{"doc":"","t":[3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["IncludedRangesError","InputEdit","Language","LanguageError","LogType","Logger","LoggerReturn","Node","Parser","ParserError","Point","Query","QueryError","Range","Tree","TreeCursor","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","byte_range","cancellation_flag","changed_ranges","child","child_by_field_id","child_by_field_name","child_count","children","children_by_field_id","children_by_field_name","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","cmp","cmp","column","default","default","default","descendant_for_byte_range","descendant_for_point_range","edit","edit","end_byte","end_byte","end_point","end_position","eq","eq","eq","eq","eq","eq","eq","eq","eq","field_count","field_id","field_id_for_name","field_name","field_name_for_id","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","goto_first_child","goto_first_child_for_byte","goto_next_sibling","goto_parent","has_changes","has_error","hash","hash","hash","id","id_for_node_kind","inner","inner","into","into","into","into","into","into","into","into","into","into","into","into","into","into","is_error","is_extra","is_missing","is_named","kind","kind_id","language","language","language","logger","named_child","named_child_count","named_children","named_descendant_for_byte_range","named_descendant_for_point_range","ne","ne","ne","ne","ne","ne","ne","ne","ne","new","new","new","new","new","new_end_byte","new_end_position","next_named_sibling","next_sibling","node","node_kind_count","node_kind_for_id","node_kind_is_named","node_kind_is_visible","old_end_byte","old_end_position","parent","parse","parse_utf16","parse_utf16_with","parse_with","partial_cmp","partial_cmp","partial_cmp","prev_named_sibling","prev_sibling","print_dot_graphs","range","reset","reset","root_node","row","set_cancellation_flag","set_included_ranges","set_language","set_logger","set_timeout_micros","start_byte","start_byte","start_byte","start_point","start_position","start_position","stop_printing_dot_graphs","timeout_micros","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_sexp","to_string","to_string","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","utf16_text","utf8_text","version","walk","walk"],"q":["tree_sitter_facade","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,3,4,5,6,7,8,9,10,11,12,13,14,10,2,13,10,10,10,10,10,10,10,8,9,10,11,12,13,14,8,9,10,11,12,13,14,10,11,12,11,8,11,12,10,10,10,13,10,12,12,10,4,5,6,7,8,9,10,11,12,9,14,9,14,9,3,4,4,5,5,6,6,7,7,8,9,10,11,11,12,13,1,2,2,3,3,4,4,5,5,6,6,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,14,14,14,14,10,10,10,11,12,10,9,1,3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,10,10,10,10,10,10,2,10,13,2,10,10,10,10,10,4,5,6,7,8,9,10,11,12,2,3,8,11,12,8,8,10,10,14,9,9,9,9,8,8,10,2,2,2,2,10,11,12,10,10,2,10,2,14,13,11,2,2,2,2,2,8,10,12,12,8,10,2,2,8,9,10,11,12,13,14,10,4,5,6,7,11,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,3,4,5,6,7,8,9,10,11,12,13,14,10,10,9,10,13],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[["range",3],["u32",15]]],[[],[["option",4],["atomicusize",3]]],[[["tree",3]]],[[["u32",15]],["option",4]],[[["u16",15]],["option",4]],[[],["option",4]],[[],["u32",15]],[[["treecursor",3]]],[[["treecursor",3],["u16",15]]],[[["str",15],["treecursor",3]]],[[],["inputedit",3]],[[],["language",3]],[[],["node",3]],[[],["point",3]],[[],["range",3]],[[],["tree",3]],[[],["treecursor",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["ordering",4]],[[["point",3]],["ordering",4]],[[["range",3]],["ordering",4]],[[],["u32",15]],[[]],[[]],[[]],[[["u32",15]],["option",4]],[[["point",3]],["option",4]],[[["inputedit",3]]],[[["inputedit",3]]],[[],["u32",15]],[[],["u32",15]],[[],["point",3]],[[],["point",3]],[[["includedrangeserror",3]],["bool",15]],[[["queryerror",3]],["bool",15]],[[["languageerror",3]],["bool",15]],[[["parsererror",3]],["bool",15]],[[["inputedit",3]],["bool",15]],[[["language",3]],["bool",15]],[[["node",3]],["bool",15]],[[["point",3]],["bool",15]],[[["range",3]],["bool",15]],[[],["u16",15]],[[],[["option",4],["u16",15]]],[[],[["option",4],["u16",15]]],[[],[["option",4],["cow",4]]],[[["u16",15]],[["option",4],["cow",4]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["parser",3]]],[[["query",3]]],[[]],[[]],[[["includedrangeserror",3]]],[[]],[[["queryerror",3]]],[[["languageerror",3]]],[[]],[[]],[[]],[[["inputedit",3]]],[[["language",3]]],[[]],[[["node",3]]],[[]],[[["point",3]]],[[]],[[]],[[["range",3]]],[[]],[[["tree",3]]],[[]],[[["treecursor",3]]],[[],["bool",15]],[[["u32",15]],[["u32",15],["option",4]]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[]],[[]],[[]],[[],["usize",15]],[[["bool",15],["str",15]],["u16",15]],null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],[["cow",4],["str",15]]],[[],["u16",15]],[[],[["language",3],["option",4]]],[[],["language",3]],[[],["language",3]],[[],[["option",4],["loggerreturn",3]]],[[["u32",15]],["option",4]],[[],["u32",15]],[[["treecursor",3]]],[[["u32",15]],["option",4]],[[["point",3]],["option",4]],[[["includedrangeserror",3]],["bool",15]],[[["queryerror",3]],["bool",15]],[[["languageerror",3]],["bool",15]],[[["parsererror",3]],["bool",15]],[[["inputedit",3]],["bool",15]],[[["language",3]],["bool",15]],[[["node",3]],["bool",15]],[[["point",3]],["bool",15]],[[["range",3]],["bool",15]],[[],[["result",4],["parsererror",3]]],[[["language",3],["str",15]],[["queryerror",3],["result",4]]],[[["u32",15],["point",3]]],[[["u32",15]]],[[["u32",15],["point",3]]],[[],["u32",15]],[[],["point",3]],[[],["option",4]],[[],["option",4]],[[],["node",3]],[[],["u16",15]],[[["u16",15]],[["option",4],["cow",4]]],[[["u16",15]],["bool",15]],[[["u16",15]],["bool",15]],[[],["u32",15]],[[],["point",3]],[[],["option",4]],[[["option",4],["tree",3]],[["result",4],["option",4],["parsererror",3]]],[[["option",4],["tree",3]],[["result",4],["option",4],["parsererror",3]]],[[["option",4],["tree",3]],[["result",4],["option",4],["parsererror",3]]],[[["option",4],["tree",3]],[["result",4],["option",4],["parsererror",3]]],[[["node",3]],[["ordering",4],["option",4]]],[[["point",3]],[["ordering",4],["option",4]]],[[["range",3]],[["ordering",4],["option",4]]],[[],["option",4]],[[],["option",4]],[[]],[[],["range",3]],[[]],[[["node",3]]],[[],["node",3]],[[],["u32",15]],[[["option",4],["atomicusize",3]]],[[],[["includedrangeserror",3],["result",4]]],[[["language",3]],[["result",4],["languageerror",3]]],[[["option",4],["logger",6]]],[[["f64",15]]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],[[],["point",3]],[[],["point",3]],[[],["point",3]],[[]],[[],["f64",15]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[["cow",4],["str",15]]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[],[["cow",4],["utf8error",3],["result",4]]],[[],["u32",15]],[[],["treecursor",3]],[[],["treecursor",3]]],"p":[[3,"LoggerReturn"],[3,"Parser"],[3,"Query"],[3,"IncludedRangesError"],[3,"QueryError"],[3,"LanguageError"],[3,"ParserError"],[3,"InputEdit"],[3,"Language"],[3,"Node"],[3,"Point"],[3,"Range"],[3,"Tree"],[3,"TreeCursor"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};