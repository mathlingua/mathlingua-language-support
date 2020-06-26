(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var removeSurrounding = Kotlin.kotlin.text.removeSurrounding_90ijwr$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toBoxedChar = Kotlin.toBoxedChar;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var Math_0 = Math;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var mutableSetOf = Kotlin.kotlin.collections.mutableSetOf_i5x0yv$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var getCallableRef = Kotlin.getCallableRef;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var reverse = Kotlin.kotlin.collections.reverse_vvxzk3$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var filterNotNull_0 = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  ParseError.prototype = Object.create(RuntimeException.prototype);
  ParseError.prototype.constructor = ParseError;
  ValidationSuccess.prototype = Object.create(Validation.prototype);
  ValidationSuccess.prototype.constructor = ValidationSuccess;
  ValidationFailure.prototype = Object.create(Validation.prototype);
  ValidationFailure.prototype.constructor = ValidationFailure;
  ValidationSuccessImpl.prototype = Object.create(ValidationSuccess.prototype);
  ValidationSuccessImpl.prototype.constructor = ValidationSuccessImpl;
  ValidationFailureImpl.prototype = Object.create(ValidationFailure.prototype);
  ValidationFailureImpl.prototype.constructor = ValidationFailureImpl;
  ChalkTalkTokenType.prototype = Object.create(Enum.prototype);
  ChalkTalkTokenType.prototype.constructor = ChalkTalkTokenType;
  Mapping.prototype = Object.create(Phase1Target.prototype);
  Mapping.prototype.constructor = Mapping;
  Group.prototype = Object.create(Phase1Target.prototype);
  Group.prototype.constructor = Group;
  TupleItem.prototype = Object.create(Phase1Target.prototype);
  TupleItem.prototype.constructor = TupleItem;
  Assignment.prototype = Object.create(TupleItem.prototype);
  Assignment.prototype.constructor = Assignment;
  AssignmentRhs.prototype = Object.create(TupleItem.prototype);
  AssignmentRhs.prototype.constructor = AssignmentRhs;
  Phase1Token.prototype = Object.create(AssignmentRhs.prototype);
  Phase1Token.prototype.constructor = Phase1Token;
  Tuple.prototype = Object.create(AssignmentRhs.prototype);
  Tuple.prototype.constructor = Tuple;
  Abstraction.prototype = Object.create(AssignmentRhs.prototype);
  Abstraction.prototype.constructor = Abstraction;
  AbstractionPart.prototype = Object.create(AssignmentRhs.prototype);
  AbstractionPart.prototype.constructor = AbstractionPart;
  ReferenceGroup.prototype = Object.create(MetaDataItem.prototype);
  ReferenceGroup.prototype.constructor = ReferenceGroup;
  SourceItemGroup.prototype = Object.create(MetaDataItem.prototype);
  SourceItemGroup.prototype.constructor = SourceItemGroup;
  StringSectionGroup.prototype = Object.create(MetaDataItem.prototype);
  StringSectionGroup.prototype.constructor = StringSectionGroup;
  ResourceSection.prototype = Object.create(SourceSection.prototype);
  ResourceSection.prototype.constructor = ResourceSection;
  AxiomGroup.prototype = Object.create(TopLevelGroup.prototype);
  AxiomGroup.prototype.constructor = AxiomGroup;
  ConjectureGroup.prototype = Object.create(TopLevelGroup.prototype);
  ConjectureGroup.prototype.constructor = ConjectureGroup;
  DefinesGroup.prototype = Object.create(TopLevelGroup.prototype);
  DefinesGroup.prototype.constructor = DefinesGroup;
  ProtoGroup.prototype = Object.create(TopLevelGroup.prototype);
  ProtoGroup.prototype.constructor = ProtoGroup;
  RepresentsGroup.prototype = Object.create(TopLevelGroup.prototype);
  RepresentsGroup.prototype.constructor = RepresentsGroup;
  ResourceGroup.prototype = Object.create(TopLevelGroup.prototype);
  ResourceGroup.prototype.constructor = ResourceGroup;
  TheoremGroup.prototype = Object.create(TopLevelGroup.prototype);
  TheoremGroup.prototype.constructor = TheoremGroup;
  TexTalkNodeType.prototype = Object.create(Enum.prototype);
  TexTalkNodeType.prototype.constructor = TexTalkNodeType;
  TexTalkTokenType.prototype = Object.create(Enum.prototype);
  TexTalkTokenType.prototype.constructor = TexTalkTokenType;
  ParseException.prototype = Object.create(Exception.prototype);
  ParseException.prototype.constructor = ParseException;
  Associativity.prototype = Object.create(Enum.prototype);
  Associativity.prototype.constructor = Associativity;
  function Parse(document, tracker) {
    this.document = document;
    this.tracker = tracker;
  }
  Parse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parse',
    interfaces: []
  };
  Parse.prototype.component1 = function () {
    return this.document;
  };
  Parse.prototype.component2 = function () {
    return this.tracker;
  };
  Parse.prototype.copy_hf49lc$ = function (document, tracker) {
    return new Parse(document === void 0 ? this.document : document, tracker === void 0 ? this.tracker : tracker);
  };
  Parse.prototype.toString = function () {
    return 'Parse(document=' + Kotlin.toString(this.document) + (', tracker=' + Kotlin.toString(this.tracker)) + ')';
  };
  Parse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.document) | 0;
    result = result * 31 + Kotlin.hashCode(this.tracker) | 0;
    return result;
  };
  Parse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.document, other.document) && Kotlin.equals(this.tracker, other.tracker)))));
  };
  function Signature(form, location) {
    this.form = form;
    this.location = location;
  }
  Signature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Signature',
    interfaces: []
  };
  Signature.prototype.component1 = function () {
    return this.form;
  };
  Signature.prototype.component2 = function () {
    return this.location;
  };
  Signature.prototype.copy_8hmx8e$ = function (form, location) {
    return new Signature(form === void 0 ? this.form : form, location === void 0 ? this.location : location);
  };
  Signature.prototype.toString = function () {
    return 'Signature(form=' + Kotlin.toString(this.form) + (', location=' + Kotlin.toString(this.location)) + ')';
  };
  Signature.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.form) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    return result;
  };
  Signature.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.form, other.form) && Kotlin.equals(this.location, other.location)))));
  };
  function MathLingua() {
    MathLingua_instance = this;
  }
  MathLingua.prototype.parse_61zpoe$ = function (input) {
    var validation = this.parseWithLocations_61zpoe$(input);
    if (Kotlin.isType(validation, ValidationSuccess))
      return validationSuccess(validation.value.document);
    else if (Kotlin.isType(validation, ValidationFailure))
      return validationFailure(validation.errors);
    else
      return Kotlin.noWhenBranchMatched();
  };
  MathLingua.prototype.parseWithLocations_61zpoe$ = function (input) {
    var tmp$;
    var lexer = newChalkTalkLexer(input);
    var allErrors = ArrayList_init();
    allErrors.addAll_brywnq$(lexer.errors());
    var parser = newChalkTalkParser();
    var tmp$_0 = parser.parse_khrmll$(lexer);
    var root = tmp$_0.component1()
    , errors = tmp$_0.component2();
    allErrors.addAll_brywnq$(errors);
    var tmp$_1 = root == null;
    if (!tmp$_1) {
      tmp$_1 = !allErrors.isEmpty();
    }
    if (tmp$_1) {
      return validationFailure(allErrors);
    }
    var tracker = newLocationTracker();
    var documentValidation = validateDocument(root, tracker);
    if (Kotlin.isType(documentValidation, ValidationSuccess))
      tmp$ = validationSuccess(new Parse(documentValidation.value, tracker));
    else if (Kotlin.isType(documentValidation, ValidationFailure)) {
      allErrors.addAll_brywnq$(documentValidation.errors);
      tmp$ = validationFailure(allErrors);
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  MathLingua.prototype.justify_bm4lxs$ = function (text, width) {
    return justify(text, width);
  };
  MathLingua.prototype.prettyPrintIdentifier_61zpoe$ = function (text) {
    return prettyPrintIdentifier(text);
  };
  MathLingua.prototype.signatureOf_26whta$ = function (group) {
    return getSignature_0(group);
  };
  MathLingua.prototype.signatureOf_mwzhn3$ = function (command) {
    return signature_0(command);
  };
  MathLingua.prototype.findAllSignatures_capiq$ = function (node, locationTracker) {
    return toList(locateAllSignatures(node, locationTracker));
  };
  MathLingua.prototype.findAllCommands_2v05ti$ = function (node) {
    return toList(locateAllCommands(node));
  };
  MathLingua.prototype.findUndefinedSignatures_kwv3np$ = function (input, supplemental) {
    var tmp$, tmp$_0, tmp$_1;
    var definedSignatures = LinkedHashSet_init();
    definedSignatures.addAll_brywnq$(this.getAllDefinedSignatures_0(input));
    tmp$ = supplemental.iterator();
    while (tmp$.hasNext()) {
      var sup = tmp$.next();
      definedSignatures.addAll_brywnq$(this.getAllDefinedSignatures_0(sup));
    }
    var validation = this.parseWithLocations_61zpoe$(input);
    if (Kotlin.isType(validation, ValidationSuccess)) {
      var result = ArrayList_init();
      var signatures = this.findAllSignatures_capiq$(validation.value.document, validation.value.tracker);
      tmp$_0 = signatures.iterator();
      while (tmp$_0.hasNext()) {
        var sig = tmp$_0.next();
        if (!definedSignatures.contains_11rb$(sig.form)) {
          result.add_11rb$(sig);
        }
      }
      tmp$_1 = result;
    }
     else if (Kotlin.isType(validation, ValidationFailure))
      tmp$_1 = emptyList();
    else
      tmp$_1 = Kotlin.noWhenBranchMatched();
    return tmp$_1;
  };
  MathLingua.prototype.getAllDefinedSignatures_0 = function (input) {
    var tmp$;
    var validation = this.parse_61zpoe$(input);
    if (Kotlin.isType(validation, ValidationSuccess)) {
      var result = ArrayList_init();
      var document = validation.value;
      var $receiver = document.defines;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_0_0;
        if ((tmp$_0_0 = element.signature) != null) {
          destination.add_11rb$(tmp$_0_0);
        }
      }
      result.addAll_brywnq$(destination);
      var $receiver_0 = document.represents;
      var destination_0 = ArrayList_init();
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        var tmp$_0_1;
        if ((tmp$_0_1 = element_0.signature) != null) {
          destination_0.add_11rb$(tmp$_0_1);
        }
      }
      result.addAll_brywnq$(destination_0);
      tmp$ = result;
    }
     else if (Kotlin.isType(validation, ValidationFailure))
      tmp$ = emptyList();
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  MathLingua.prototype.expandAtPosition_ilrjst$ = function (text, row, column, defines, represents) {
    var tmp$;
    var validation = this.parseWithLocations_61zpoe$(text);
    if (Kotlin.isType(validation, ValidationFailure))
      return validationFailure(validation.errors);
    else if (Kotlin.isType(validation, ValidationSuccess)) {
      var doc = validation.value.document;
      var tracker = validation.value.tracker;
      var target = findNode(tracker, doc, row, column);
      var newDoc = Kotlin.isType(tmp$ = expandAtNode(doc, target, defines, represents), Document) ? tmp$ : throwCCE();
      return validationSuccess(newDoc);
    }
     else
      return Kotlin.noWhenBranchMatched();
  };
  MathLingua.prototype.expand_pkhkwo$ = function (doc) {
    return fullExpandComplete(doc);
  };
  MathLingua.prototype.getPatternsToWrittenAs_r44ck5$ = function (defines, represents) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var result = LinkedHashMap_init();
    tmp$ = represents.iterator();
    while (tmp$.hasNext()) {
      var rep = tmp$.next();
      var allItems = (tmp$_0 = rep.metaDataSection) != null ? tmp$_0.items : null;
      var writtenAs = null;
      if (allItems != null) {
        tmp$_1 = allItems.iterator();
        while (tmp$_1.hasNext()) {
          var item = tmp$_1.next();
          var tmp$_7 = Kotlin.isType(item, StringSectionGroup) && equals(item.section.name, 'written');
          if (tmp$_7) {
            tmp$_7 = !item.section.values.isEmpty();
          }
          if (tmp$_7) {
            writtenAs = removeSurrounding(item.section.values.get_za3lpa$(0), '"', '"');
            break;
          }
        }
      }
      if (writtenAs == null) {
        continue;
      }
      var validation = rep.id.texTalkRoot;
      if (Kotlin.isType(validation, ValidationSuccess)) {
        var exp = validation.value;
        if (exp.children.size === 1 && Kotlin.isType(exp.children.get_za3lpa$(0), OperatorTexTalkNode)) {
          var key = Kotlin.isType(tmp$_2 = exp.children.get_za3lpa$(0), OperatorTexTalkNode) ? tmp$_2 : throwCCE();
          var value = writtenAs;
          result.put_xwzc9p$(key, value);
        }
      }
    }
    tmp$_3 = defines.iterator();
    while (tmp$_3.hasNext()) {
      var def = tmp$_3.next();
      var allItems_0 = (tmp$_4 = def.metaDataSection) != null ? tmp$_4.items : null;
      var writtenAs_0 = null;
      if (allItems_0 != null) {
        tmp$_5 = allItems_0.iterator();
        while (tmp$_5.hasNext()) {
          var item_0 = tmp$_5.next();
          var tmp$_8 = Kotlin.isType(item_0, StringSectionGroup) && equals(item_0.section.name, 'written');
          if (tmp$_8) {
            tmp$_8 = !item_0.section.values.isEmpty();
          }
          if (tmp$_8) {
            writtenAs_0 = removeSurrounding(item_0.section.values.get_za3lpa$(0), '"', '"');
            break;
          }
        }
      }
      if (writtenAs_0 == null) {
        continue;
      }
      var validation_0 = def.id.texTalkRoot;
      if (Kotlin.isType(validation_0, ValidationSuccess)) {
        var exp_0 = validation_0.value;
        if (exp_0.children.size === 1 && Kotlin.isType(exp_0.children.get_za3lpa$(0), Command)) {
          var cmd = Kotlin.isType(tmp$_6 = exp_0.children.get_za3lpa$(0), Command) ? tmp$_6 : throwCCE();
          var key_0 = new OperatorTexTalkNode(null, cmd, null);
          var value_0 = writtenAs_0;
          result.put_xwzc9p$(key_0, value_0);
        }
      }
    }
    return result;
  };
  MathLingua.prototype.expandWrittenAs_yjgk9m$ = function (node, defines, represents) {
    return expandAsWritten(node, this.getPatternsToWrittenAs_r44ck5$(defines, represents));
  };
  function MathLingua$expandWrittenAs$lambda(closure$patternToExpansion) {
    return function (it) {
      if (Kotlin.isType(it, Statement)) {
        var validation = it.texTalkRoot;
        if (Kotlin.isType(validation, ValidationFailure))
          return it;
        else if (Kotlin.isType(validation, ValidationSuccess)) {
          var texTalkNode = validation.value;
          var newText = expandAsWritten(texTalkNode, closure$patternToExpansion);
          return new Statement(newText, validation);
        }
         else
          return Kotlin.noWhenBranchMatched();
      }
       else
        return it;
    };
  }
  MathLingua.prototype.expandWrittenAs_r924yu$ = function (phase2Node, patternToExpansion) {
    return phase2Node.transform_ql661s$(MathLingua$expandWrittenAs$lambda(patternToExpansion));
  };
  MathLingua.prototype.printExpanded_qz9155$ = function (input, supplemental, html) {
    var tmp$, tmp$_0, tmp$_1;
    var totalText = input + '\n' + '\n' + '\n' + supplemental;
    var totalTextValidation = this.parse_61zpoe$(totalText);
    if (Kotlin.isType(totalTextValidation, ValidationFailure))
      tmp$ = emptyList();
    else if (Kotlin.isType(totalTextValidation, ValidationSuccess))
      tmp$ = totalTextValidation.value.defines;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var defines = tmp$;
    if (Kotlin.isType(totalTextValidation, ValidationFailure))
      tmp$_0 = emptyList();
    else if (Kotlin.isType(totalTextValidation, ValidationSuccess))
      tmp$_0 = totalTextValidation.value.represents;
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    var represents = tmp$_0;
    var validation = this.parse_61zpoe$(input);
    if (Kotlin.isType(validation, ValidationFailure))
      tmp$_1 = validationFailure(validation.errors);
    else if (Kotlin.isType(validation, ValidationSuccess))
      tmp$_1 = validationSuccess(this.prettyPrint_rcnm04$(validation.value, defines, represents, html));
    else
      tmp$_1 = Kotlin.noWhenBranchMatched();
    return tmp$_1;
  };
  MathLingua.prototype.prettyPrint_rcnm04$ = function (node, defines, represents, html) {
    var tmp$, tmp$_0;
    if (html) {
      tmp$ = new HtmlCodeWriter(defines, represents);
    }
     else {
      tmp$ = new MathLinguaCodeWriter(defines, represents);
    }
    var writer = tmp$;
    var code = node.toCode_pc06dk$(false, 0, writer).getCode();
    if (html) {
      tmp$_0 = getHtml(replace(code, '<br/><br/><br/>', '<br/><br/>'));
    }
     else {
      tmp$_0 = code;
    }
    return tmp$_0;
  };
  MathLingua.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MathLingua',
    interfaces: []
  };
  var MathLingua_instance = null;
  function MathLingua_getInstance() {
    if (MathLingua_instance === null) {
      new MathLingua();
    }
    return MathLingua_instance;
  }
  function getHtml(body) {
    return '\n' + '<!DOCTYPE html>' + '\n' + '<html>' + '\n' + '    <head>' + '\n' + '        <link rel=' + '"' + 'stylesheet' + '"' + '\n' + '              href=' + '"' + 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css' + '"' + '\n' + '              integrity=' + '"' + 'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq' + '"' + '\n' + '              crossorigin=' + '"' + 'anonymous' + '"' + '>' + '\n' + '        <script defer' + '\n' + '                src=' + '"' + 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js' + '"' + '\n' + '                integrity=' + '"' + 'sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz' + '"' + '\n' + '                crossorigin=' + '"' + 'anonymous' + '"' + '>' + '\n' + '        <\/script>' + '\n' + '        <script>' + '\n' + '            function buildMathFragment(text) {' + '\n' + '                const fragment = document.createDocumentFragment();' + '\n' + "                var buffer = '';" + '\n' + '                var i = 0;' + '\n' + '                while (i < text.length) {' + '\n' + "                    if (text[i] === '" + '\\' + '\\' + "' && text[i+1] === '[') {" + '\n' + '                        i += 2; // skip over ' + '\\' + ' and [' + '\n' + '                        fragment.appendChild(document.createTextNode(buffer));' + '\n' + "                        buffer = '';" + '\n' + '\n' + "                        const span = document.createElement('span');" + '\n' + "                        var math = '';" + '\n' + '                        while (i < text.length &&' + '\n' + "                            !(text[i] === '" + '\\' + '\\' + "' && text[i+1] === ']')) {" + '\n' + '                            math += text[i++];' + '\n' + '                        }' + '\n' + "                        if (text[i] === '" + '\\' + '\\' + "') {" + '\n' + '                            i++; // move past the ' + '\\' + '\n' + '                        }' + '\n' + "                        if (text[i] === ']') {" + '\n' + '                            i++; // move past the ]' + '\n' + '                        }' + '\n' + '                        try {' + '\n' + '                            katex.render(math, span, {' + '\n' + '                                throwOnError: true,' + '\n' + '                                displayMode: true' + '\n' + '                            });' + '\n' + '                        } catch {' + '\n' + '                            span.appendChild(document.createTextNode(math));' + '\n' + '                        }' + '\n' + '                        fragment.appendChild(span);' + '\n' + '                    } else {' + '\n' + '                        buffer += text[i++];' + '\n' + '                    }' + '\n' + '                }' + '\n' + '\n' + '                if (buffer.length > 0) {' + '\n' + '                    fragment.appendChild(document.createTextNode(buffer));' + '\n' + '                }' + '\n' + '\n' + '                return fragment;' + '\n' + '            }' + '\n' + '\n' + '            function render(node) {' + '\n' + '                for (let i = 0; i < node.childNodes.length; i++) {' + '\n' + '                    const child = node.childNodes[i];' + '\n' + '\n' + '                    // node is an element node => nodeType === 1' + '\n' + '                    // node is an attribute node => nodeType === 2' + '\n' + '                    // node is a text node => nodeType === 3' + '\n' + '                    // node is a comment node => nodeType === 8' + '\n' + '                    if (child.nodeType === 3) {' + '\n' + '                        const text = child.textContent;' + '\n' + '                        if (text.trim()) {' + '\n' + '                            const fragment = buildMathFragment(text);' + '\n' + '                            i += fragment.childNodes.length - 1;' + '\n' + '                            node.replaceChild(fragment, child);' + '\n' + '                        }' + '\n' + '                    } else if (child.nodeType === 1) {' + '\n' + '                        render(child);' + '\n' + '                    }' + '\n' + '                }' + '\n' + '            }' + '\n' + '        <\/script>' + '\n' + '        <style>' + '\n' + '            .content {' + '\n' + '                margin-top: 1em;' + '\n' + '                margin-bottom: 1em;' + '\n' + '                font-size: 1em;' + '\n' + '            }' + '\n' + '\n' + '            .mathlingua {' + '\n' + '                font-family: monospace;' + '\n' + '            }' + '\n' + '\n' + '            .mathlingua-header {' + '\n' + '                font-weight: bold;' + '\n' + '                color: #0055bb;' + '\n' + '            }' + '\n' + '\n' + '            .mathlingua-whitespace {' + '\n' + '                padding: 0;' + '\n' + '                margin: 0;' + '\n' + '                margin-left: 1ex;' + '\n' + '            }' + '\n' + '\n' + '            .mathlingua-id {' + '\n' + '                font-weight: bold;' + '\n' + '                color: #5500aa;' + '\n' + '            }' + '\n' + '\n' + '            .mathlingua-text {' + '\n' + '                color: #007700;' + '\n' + '            }' + '\n' + '\n' + '            .mathlingua-top-level {' + '\n' + '                display: block;' + '\n' + '                width: fit-content;' + '\n' + '                overflow: scroll;' + '\n' + '                margin-left: 1em;' + '\n' + '            }' + '\n' + '\n' + '            .katex {' + '\n' + '                font-size: 0.75em;' + '\n' + '            }' + '\n' + '\n' + '            .katex-display {' + '\n' + '                display: contents;' + '\n' + '            }' + '\n' + '\n' + '            .katex-display > .katex {' + '\n' + '                display: contents;' + '\n' + '            }' + '\n' + '\n' + '            .katex-display > .katex > .katex-html {' + '\n' + '                display: contents;' + '\n' + '            }' + '\n' + '        <\/style>' + '\n' + '    <\/head>' + '\n' + '    <body onload=' + '"' + 'render(document.body)' + '"' + '>' + '\n' + '        <div class=' + '"' + 'content' + '"' + '>' + '\n' + '            ' + body + '\n' + '        <\/div>' + '\n' + '    <\/body>' + '\n' + '<\/html>' + '\n';
  }
  function ParseError(message, row, column) {
    RuntimeException_init(message, this);
    this.message_rj2t0z$_0 = message;
    this.row = row;
    this.column = column;
    this.name = 'ParseError';
  }
  Object.defineProperty(ParseError.prototype, 'message', {
    get: function () {
      return this.message_rj2t0z$_0;
    }
  });
  ParseError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseError',
    interfaces: [RuntimeException]
  };
  ParseError.prototype.component1 = function () {
    return this.message;
  };
  ParseError.prototype.component2 = function () {
    return this.row;
  };
  ParseError.prototype.component3 = function () {
    return this.column;
  };
  ParseError.prototype.copy_3m52m6$ = function (message, row, column) {
    return new ParseError(message === void 0 ? this.message : message, row === void 0 ? this.row : row, column === void 0 ? this.column : column);
  };
  ParseError.prototype.toString = function () {
    return 'ParseError(message=' + Kotlin.toString(this.message) + (', row=' + Kotlin.toString(this.row)) + (', column=' + Kotlin.toString(this.column)) + ')';
  };
  ParseError.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    return result;
  };
  ParseError.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.message, other.message) && Kotlin.equals(this.row, other.row) && Kotlin.equals(this.column, other.column)))));
  };
  function Location(row, column) {
    this.row = row;
    this.column = column;
  }
  Location.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Location',
    interfaces: []
  };
  Location.prototype.component1 = function () {
    return this.row;
  };
  Location.prototype.component2 = function () {
    return this.column;
  };
  Location.prototype.copy_vux9f0$ = function (row, column) {
    return new Location(row === void 0 ? this.row : row, column === void 0 ? this.column : column);
  };
  Location.prototype.toString = function () {
    return 'Location(row=' + Kotlin.toString(this.row) + (', column=' + Kotlin.toString(this.column)) + ')';
  };
  Location.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    return result;
  };
  Location.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.row, other.row) && Kotlin.equals(this.column, other.column)))));
  };
  function LocationTracker() {
  }
  LocationTracker.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LocationTracker',
    interfaces: []
  };
  function MutableLocationTracker() {
  }
  MutableLocationTracker.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MutableLocationTracker',
    interfaces: [LocationTracker]
  };
  function MutableLocationTrackerImpl() {
    this.map_0 = LinkedHashMap_init();
  }
  MutableLocationTrackerImpl.prototype.hasLocationOf_2v05ti$ = function (node) {
    return this.map_0.containsKey_11rb$(node);
  };
  MutableLocationTrackerImpl.prototype.getLocationOf_2v05ti$ = function (node) {
    return this.map_0.get_11rb$(node);
  };
  MutableLocationTrackerImpl.prototype.setLocationOf_y4beru$ = function (node, location) {
    this.map_0.put_xwzc9p$(node, location);
  };
  MutableLocationTrackerImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableLocationTrackerImpl',
    interfaces: [MutableLocationTracker]
  };
  function newLocationTracker() {
    return new MutableLocationTrackerImpl();
  }
  function Validation() {
  }
  Validation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Validation',
    interfaces: []
  };
  function ValidationSuccess(value) {
    Validation.call(this);
    this.value = value;
  }
  ValidationSuccess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationSuccess',
    interfaces: [Validation]
  };
  function ValidationFailure(errors) {
    Validation.call(this);
    this.errors = errors;
  }
  ValidationFailure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationFailure',
    interfaces: [Validation]
  };
  function ValidationSuccessImpl(v) {
    ValidationSuccess.call(this, v);
    this.v = v;
  }
  ValidationSuccessImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationSuccessImpl',
    interfaces: [ValidationSuccess]
  };
  ValidationSuccessImpl.prototype.component1 = function () {
    return this.v;
  };
  ValidationSuccessImpl.prototype.copy_11rb$ = function (v) {
    return new ValidationSuccessImpl(v === void 0 ? this.v : v);
  };
  ValidationSuccessImpl.prototype.toString = function () {
    return 'ValidationSuccessImpl(v=' + Kotlin.toString(this.v) + ')';
  };
  ValidationSuccessImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  ValidationSuccessImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function ValidationFailureImpl(errs) {
    ValidationFailure.call(this, errs);
    this.errs = errs;
  }
  ValidationFailureImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationFailureImpl',
    interfaces: [ValidationFailure]
  };
  ValidationFailureImpl.prototype.component1 = function () {
    return this.errs;
  };
  ValidationFailureImpl.prototype.copy_hi82q1$ = function (errs) {
    return new ValidationFailureImpl(errs === void 0 ? this.errs : errs);
  };
  ValidationFailureImpl.prototype.toString = function () {
    return 'ValidationFailureImpl(errs=' + Kotlin.toString(this.errs) + ')';
  };
  ValidationFailureImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.errs) | 0;
    return result;
  };
  ValidationFailureImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.errs, other.errs))));
  };
  function validationSuccess(value) {
    return new ValidationSuccessImpl(value);
  }
  function validationSuccess_0(tracker, phase1Node, phase2Node) {
    tracker.setLocationOf_y4beru$(phase2Node, new Location(getRow(phase1Node), getColumn(phase1Node)));
    return new ValidationSuccessImpl(phase2Node);
  }
  function validationFailure(errors) {
    return new ValidationFailureImpl(errors);
  }
  function tokenize(text) {
    var tmp$, tmp$_0;
    var tokens = ArrayList_init();
    var i = 0;
    while (i < text.length) {
      if (text.charCodeAt(i) === 32) {
        var buffer = StringBuilder_init();
        while (i < text.length && text.charCodeAt(i) === 32) {
          buffer.append_s8itvh$(text.charCodeAt((tmp$ = i, i = tmp$ + 1 | 0, tmp$)));
        }
        tokens.add_11rb$(buffer.toString());
      }
       else {
        var buffer_0 = StringBuilder_init();
        while (i < text.length && text.charCodeAt(i) !== 32) {
          buffer_0.append_s8itvh$(text.charCodeAt((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0)));
        }
        tokens.add_11rb$(buffer_0.toString());
      }
    }
    return tokens;
  }
  function justify(text, width) {
    var tmp$, tmp$_0;
    var tokens = tokenize(text);
    var lines = ArrayList_init();
    var i = 0;
    while (i < tokens.size) {
      var curLine = StringBuilder_init();
      while (true) {
        var tmp$_1 = i < tokens.size;
        if (tmp$_1) {
          tmp$_1 = curLine.length === 0;
        }
        if (!(tmp$_1 && isBlank(tokens.get_za3lpa$(i))))
          break;
        i = i + 1 | 0;
      }
      while (i < tokens.size && (curLine.length + tokens.get_za3lpa$(i).length | 0) <= width) {
        curLine.append_gw00v9$(tokens.get_za3lpa$((tmp$ = i, i = tmp$ + 1 | 0, tmp$)));
      }
      var tmp$_2 = i < tokens.size;
      if (tmp$_2) {
        tmp$_2 = curLine.length === 0;
      }
      if (tmp$_2) {
        curLine.append_gw00v9$(tokens.get_za3lpa$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0)));
      }
      lines.add_11rb$(curLine.toString());
    }
    return lines;
  }
  function ChalkTalkLexer() {
  }
  ChalkTalkLexer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ChalkTalkLexer',
    interfaces: []
  };
  function newChalkTalkLexer(text) {
    return new ChalkTalkLexerImpl(text);
  }
  function isDigit(c) {
    return (new CharRange(48, 57)).contains_mef7kx$(c);
  }
  function ChalkTalkLexerImpl(text) {
    this.text_0 = text;
    this.errors_0 = ArrayList_init();
    this.chalkTalkTokens_0 = null;
    this.index_0 = 0;
  }
  ChalkTalkLexerImpl.prototype.ensureInitialized_0 = function () {
    if (this.chalkTalkTokens_0 == null) {
      this.initialize_0();
    }
  };
  ChalkTalkLexerImpl.prototype.initialize_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42, tmp$_43, tmp$_44, tmp$_45, tmp$_46, tmp$_47, tmp$_48, tmp$_49;
    this.chalkTalkTokens_0 = ArrayList_init();
    if (!endsWith(this.text_0, '\n')) {
      this.text_0 = this.text_0 + '\n';
    }
    var i = 0;
    var line = 0;
    var column = -1;
    var levStack = newStack();
    levStack.push_11rb$(0);
    var numOpen = 0;
    while (i < this.text_0.length) {
      if (this.text_0.charCodeAt(i) === 45 && (i + 1 | 0) < this.text_0.length && this.text_0.charCodeAt(i + 1 | 0) === 45) {
        while (i < this.text_0.length && this.text_0.charCodeAt(i) !== 10) {
          i = i + 1 | 0;
          column = column + 1 | 0;
        }
        if (i < this.text_0.length && this.text_0.charCodeAt(i) === 10) {
          i = i + 1 | 0;
          column = 0;
          line = line + 1 | 0;
        }
        continue;
      }
      var c = this.text_0.charCodeAt((tmp$ = i, i = tmp$ + 1 | 0, tmp$));
      column = column + 1 | 0;
      if (c === 46 && i < this.text_0.length && this.text_0.charCodeAt(i) === 46 && (i + 1 | 0) < this.text_0.length && this.text_0.charCodeAt(i + 1 | 0) === 46) {
        var startColumn = column;
        i = i + 2 | 0;
        column = column + 2 | 0;
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('...', ChalkTalkTokenType$DotDotDot_getInstance(), line, startColumn));
      }
       else if (c === 61) {
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('=', ChalkTalkTokenType$Equals_getInstance(), line, column));
      }
       else if (c === 95) {
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('_', ChalkTalkTokenType$Underscore_getInstance(), line, column));
      }
       else if (c === 40) {
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('(', ChalkTalkTokenType$LParen_getInstance(), line, column));
      }
       else if (c === 41) {
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(')', ChalkTalkTokenType$RParen_getInstance(), line, column));
      }
       else if (c === 123) {
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('{', ChalkTalkTokenType$LCurly_getInstance(), line, column));
      }
       else if (c === 125) {
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('}', ChalkTalkTokenType$RCurly_getInstance(), line, column));
      }
       else if (c === 58) {
        if (i < this.text_0.length && this.text_0.charCodeAt(i) === 61) {
          ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(':=', ChalkTalkTokenType$ColonEquals_getInstance(), line, column));
          i = i + 1 | 0;
          column = column + 1 | 0;
        }
         else {
          ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(':', ChalkTalkTokenType$Colon_getInstance(), line, column));
        }
      }
       else if (c === 44) {
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(',', ChalkTalkTokenType$Comma_getInstance(), line, column));
      }
       else if (c === 46 && i < this.text_0.length && this.text_0.charCodeAt(i) === 32) {
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('. ', ChalkTalkTokenType$DotSpace_getInstance(), line, column));
        i = i + 1 | 0;
        column = column + 1 | 0;
      }
       else if (c === 10) {
        line = line + 1 | 0;
        column = 0;
        if ((i - 2 | 0) < 0 || this.text_0.charCodeAt(i - 2 | 0) === 10) {
          while (i < this.text_0.length && this.text_0.charCodeAt(i) === 10) {
            i = i + 1 | 0;
            column = column + 1 | 0;
            line = line + 1 | 0;
          }
          ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('-', ChalkTalkTokenType$Linebreak_getInstance(), line, column));
          continue;
        }
        var indentCount = 0;
        while (i < this.text_0.length && (i + 1 | 0) < this.text_0.length && this.text_0.charCodeAt(i) === 32 && this.text_0.charCodeAt(i + 1 | 0) === 32) {
          indentCount = indentCount + 1 | 0;
          i = i + 2 | 0;
          column = column + 2 | 0;
        }
        if (i < this.text_0.length && this.text_0.charCodeAt(i) === 46 && (i + 1 | 0) < this.text_0.length && this.text_0.charCodeAt(i + 1 | 0) === 32) {
          indentCount = indentCount + 1 | 0;
        }
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('<Indent>', ChalkTalkTokenType$Begin_getInstance(), line, column));
        numOpen = numOpen + 1 | 0;
        var level = levStack.peek();
        if (indentCount <= level) {
          while (numOpen > 0 && !levStack.isEmpty() && indentCount <= levStack.peek()) {
            ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('<Unindent>', ChalkTalkTokenType$End_getInstance(), line, column));
            numOpen = numOpen - 1 | 0;
            levStack.pop();
          }
          if (levStack.isEmpty()) {
            levStack.push_11rb$(0);
          }
        }
        levStack.push_11rb$(indentCount);
      }
       else if (this.isOperatorChar_0(c)) {
        var startLine = line;
        var startColumn_0 = column;
        var name = '' + String.fromCharCode(toBoxedChar(c));
        while (i < this.text_0.length && this.isOperatorChar_0(this.text_0.charCodeAt(i))) {
          tmp$_3 = name;
          tmp$_2 = this.text_0;
          tmp$_1 = (tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0);
          name = tmp$_3 + String.fromCharCode(tmp$_2.charCodeAt(tmp$_1));
          column = column + 1 | 0;
        }
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(name, ChalkTalkTokenType$Name_getInstance(), startLine, startColumn_0));
      }
       else if (this.isNameChar_0(c)) {
        var startLine_0 = line;
        var startColumn_1 = column;
        var name_0 = '' + String.fromCharCode(toBoxedChar(c));
        var isComplete = false;
        while (i < this.text_0.length && this.isNameChar_0(this.text_0.charCodeAt(i))) {
          tmp$_7 = name_0;
          tmp$_6 = this.text_0;
          tmp$_5 = (tmp$_4 = i, i = tmp$_4 + 1 | 0, tmp$_4);
          name_0 = tmp$_7 + String.fromCharCode(tmp$_6.charCodeAt(tmp$_5));
          column = column + 1 | 0;
        }
        if (i < this.text_0.length && this.text_0.charCodeAt(i) === 35 && (i + 1 | 0) < this.text_0.length && isDigit(this.text_0.charCodeAt(i + 1 | 0))) {
          tmp$_11 = name_0;
          tmp$_10 = this.text_0;
          tmp$_9 = (tmp$_8 = i, i = tmp$_8 + 1 | 0, tmp$_8);
          name_0 = tmp$_11 + String.fromCharCode(tmp$_10.charCodeAt(tmp$_9));
          column = column + 1 | 0;
          while (i < this.text_0.length && isDigit(this.text_0.charCodeAt(i))) {
            tmp$_15 = name_0;
            tmp$_14 = this.text_0;
            tmp$_13 = (tmp$_12 = i, i = tmp$_12 + 1 | 0, tmp$_12);
            name_0 = tmp$_15 + String.fromCharCode(tmp$_14.charCodeAt(tmp$_13));
            column = column + 1 | 0;
          }
          isComplete = true;
        }
        if (!isComplete && i < this.text_0.length && this.text_0.charCodeAt(i) === 46 && (i + 1 | 0) < this.text_0.length && this.text_0.charCodeAt(i + 1 | 0) === 46 && (i + 2 | 0) < this.text_0.length && this.text_0.charCodeAt(i + 2 | 0) === 46) {
          for (var tmp = 0; tmp < 3; tmp++) {
            tmp$_19 = name_0;
            tmp$_18 = this.text_0;
            tmp$_17 = (tmp$_16 = i, i = tmp$_16 + 1 | 0, tmp$_16);
            name_0 = tmp$_19 + String.fromCharCode(tmp$_18.charCodeAt(tmp$_17));
            column = column + 1 | 0;
          }
        }
        if (!isComplete && i < this.text_0.length && this.text_0.charCodeAt(i) === 35) {
          tmp$_23 = name_0;
          tmp$_22 = this.text_0;
          tmp$_21 = (tmp$_20 = i, i = tmp$_20 + 1 | 0, tmp$_20);
          name_0 = tmp$_23 + String.fromCharCode(tmp$_22.charCodeAt(tmp$_21));
          column = column + 1 | 0;
          while (i < this.text_0.length && this.isNameChar_0(this.text_0.charCodeAt(i))) {
            tmp$_27 = name_0;
            tmp$_26 = this.text_0;
            tmp$_25 = (tmp$_24 = i, i = tmp$_24 + 1 | 0, tmp$_24);
            name_0 = tmp$_27 + String.fromCharCode(tmp$_26.charCodeAt(tmp$_25));
            column = column + 1 | 0;
          }
          if (endsWith(name_0, '#')) {
            this.errors_0.add_11rb$(new ParseError('If a name contains a # is must be of the form ' + ("<identifier>...#<identifier>... but found '" + name_0 + "' ") + " (missing the name after '#')", startLine_0, startColumn_1));
          }
          if (i < this.text_0.length && this.text_0.charCodeAt(i) === 46 && (i + 1 | 0) < this.text_0.length && this.text_0.charCodeAt(i + 1 | 0) === 46 && (i + 2 | 0) < this.text_0.length && this.text_0.charCodeAt(i + 2 | 0) === 46) {
            for (var tmp_0 = 0; tmp_0 < 3; tmp_0++) {
              tmp$_31 = name_0;
              tmp$_30 = this.text_0;
              tmp$_29 = (tmp$_28 = i, i = tmp$_28 + 1 | 0, tmp$_28);
              name_0 = tmp$_31 + String.fromCharCode(tmp$_30.charCodeAt(tmp$_29));
              column = column + 1 | 0;
            }
          }
          if (!endsWith(name_0, '...')) {
            this.errors_0.add_11rb$(new ParseError('If a name contains a # is must be of the form ' + ("<identifier>...#<identifier>... but found '" + name_0 + "' ") + "(missing the trailing '...')", startLine_0, startColumn_1));
          }
        }
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(name_0, ChalkTalkTokenType$Name_getInstance(), startLine_0, startColumn_1));
      }
       else if (c === 34) {
        var startLine_1 = line;
        var startColumn_2 = column;
        var str = '' + String.fromCharCode(toBoxedChar(c));
        while (i < this.text_0.length && this.text_0.charCodeAt(i) !== 34) {
          tmp$_35 = str;
          tmp$_34 = this.text_0;
          tmp$_33 = (tmp$_32 = i, i = tmp$_32 + 1 | 0, tmp$_32);
          str = tmp$_35 + String.fromCharCode(tmp$_34.charCodeAt(tmp$_33));
          column = column + 1 | 0;
        }
        if (i === this.text_0.length) {
          this.errors_0.add_11rb$(new ParseError('Expected a terminating "', line, column));
          str += '"';
        }
         else {
          tmp$_39 = str;
          tmp$_38 = this.text_0;
          tmp$_37 = (tmp$_36 = i, i = tmp$_36 + 1 | 0, tmp$_36);
          str = tmp$_39 + String.fromCharCode(tmp$_38.charCodeAt(tmp$_37));
          column = column + 1 | 0;
        }
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(str, ChalkTalkTokenType$String_getInstance(), startLine_1, startColumn_2));
      }
       else if (c === 39) {
        var startLine_2 = line;
        var startColumn_3 = column;
        var stmt = '' + String.fromCharCode(toBoxedChar(c));
        while (i < this.text_0.length && this.text_0.charCodeAt(i) !== 39) {
          tmp$_43 = stmt;
          tmp$_42 = this.text_0;
          tmp$_41 = (tmp$_40 = i, i = tmp$_40 + 1 | 0, tmp$_40);
          stmt = tmp$_43 + String.fromCharCode(tmp$_42.charCodeAt(tmp$_41));
          column = column + 1 | 0;
        }
        if (i === this.text_0.length) {
          this.errors_0.add_11rb$(new ParseError("Expected a terminating '", line, column));
          stmt += "'";
        }
         else {
          tmp$_47 = stmt;
          tmp$_46 = this.text_0;
          tmp$_45 = (tmp$_44 = i, i = tmp$_44 + 1 | 0, tmp$_44);
          stmt = tmp$_47 + String.fromCharCode(tmp$_46.charCodeAt(tmp$_45));
          column = column + 1 | 0;
        }
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(stmt, ChalkTalkTokenType$Statement_getInstance(), startLine_2, startColumn_3));
      }
       else if (c === 91) {
        var startLine_3 = line;
        var startColumn_4 = column;
        var id = '' + String.fromCharCode(toBoxedChar(c));
        var braceCount = 1;
        while (i < this.text_0.length && this.text_0.charCodeAt(i) !== 10) {
          var next = this.text_0.charCodeAt((tmp$_48 = i, i = tmp$_48 + 1 | 0, tmp$_48));
          id += String.fromCharCode(next);
          column = column + 1 | 0;
          if (next === 91) {
            braceCount = braceCount + 1 | 0;
          }
           else if (next === 93) {
            tmp$_49 = braceCount, braceCount = tmp$_49 - 1 | 0;
          }
          if (braceCount === 0) {
            break;
          }
        }
        if (i === this.text_0.length) {
          this.errors_0.add_11rb$(new ParseError('Expected a terminating ]', line, column));
          id += ']';
        }
        ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token(id, ChalkTalkTokenType$Id_getInstance(), startLine_3, startColumn_4));
      }
       else if (c !== 32) {
        this.errors_0.add_11rb$(new ParseError('Unrecognized character ' + String.fromCharCode(c), line, column));
      }
    }
    while (numOpen > 0) {
      ensureNotNull(this.chalkTalkTokens_0).add_11rb$(new Phase1Token('<Unindent>', ChalkTalkTokenType$End_getInstance(), line, column));
      numOpen = numOpen - 1 | 0;
    }
  };
  ChalkTalkLexerImpl.prototype.isOperatorChar_0 = function (c) {
    return contains('~!@%^&*-+<>\\/=', c);
  };
  ChalkTalkLexerImpl.prototype.isNameChar_0 = function (c) {
    return Regex_init('[a-zA-Z0-9]+').matches_6bul2c$(String.fromCharCode(c));
  };
  ChalkTalkLexerImpl.prototype.hasNext = function () {
    this.ensureInitialized_0();
    return this.index_0 < ensureNotNull(this.chalkTalkTokens_0).size;
  };
  ChalkTalkLexerImpl.prototype.hasNextNext = function () {
    this.ensureInitialized_0();
    return (this.index_0 + 1 | 0) < ensureNotNull(this.chalkTalkTokens_0).size;
  };
  ChalkTalkLexerImpl.prototype.peek = function () {
    this.ensureInitialized_0();
    return ensureNotNull(this.chalkTalkTokens_0).get_za3lpa$(this.index_0);
  };
  ChalkTalkLexerImpl.prototype.peekPeek = function () {
    this.ensureInitialized_0();
    return ensureNotNull(this.chalkTalkTokens_0).get_za3lpa$(this.index_0 + 1 | 0);
  };
  ChalkTalkLexerImpl.prototype.next = function () {
    this.ensureInitialized_0();
    var tok = this.peek();
    this.index_0 = this.index_0 + 1 | 0;
    return tok;
  };
  ChalkTalkLexerImpl.prototype.errors = function () {
    return this.errors_0;
  };
  ChalkTalkLexerImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChalkTalkLexerImpl',
    interfaces: [ChalkTalkLexer]
  };
  function ChalkTalkParser() {
  }
  ChalkTalkParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ChalkTalkParser',
    interfaces: []
  };
  function ChalkTalkParseResult(root, errors) {
    this.root = root;
    this.errors = errors;
  }
  ChalkTalkParseResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChalkTalkParseResult',
    interfaces: []
  };
  ChalkTalkParseResult.prototype.component1 = function () {
    return this.root;
  };
  ChalkTalkParseResult.prototype.component2 = function () {
    return this.errors;
  };
  ChalkTalkParseResult.prototype.copy_vlv7gc$ = function (root, errors) {
    return new ChalkTalkParseResult(root === void 0 ? this.root : root, errors === void 0 ? this.errors : errors);
  };
  ChalkTalkParseResult.prototype.toString = function () {
    return 'ChalkTalkParseResult(root=' + Kotlin.toString(this.root) + (', errors=' + Kotlin.toString(this.errors)) + ')';
  };
  ChalkTalkParseResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.root) | 0;
    result = result * 31 + Kotlin.hashCode(this.errors) | 0;
    return result;
  };
  ChalkTalkParseResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.root, other.root) && Kotlin.equals(this.errors, other.errors)))));
  };
  function newChalkTalkParser() {
    return new ChalkTalkParserImpl();
  }
  var INVALID;
  function ChalkTalkParserImpl() {
  }
  ChalkTalkParserImpl.prototype.parse_khrmll$ = function (chalkTalkLexer) {
    var worker = new ChalkTalkParserImpl$ParserWorker(chalkTalkLexer);
    var errors = worker.errors;
    var root = worker.root();
    return new ChalkTalkParseResult(root, errors);
  };
  function ChalkTalkParserImpl$ParserWorker(chalkTalkLexer) {
    this.chalkTalkLexer_0 = chalkTalkLexer;
    this.errors = ArrayList_init();
  }
  ChalkTalkParserImpl$ParserWorker.prototype.root = function () {
    var groups = ArrayList_init();
    while (this.hasNext_0()) {
      var grp = this.group_0();
      if (grp == null)
        break;
      groups.add_11rb$(grp);
    }
    while (this.hasNext_0()) {
      var next = this.next_0();
      this.addError_0("Unrecognized token '" + next.text, next);
    }
    return new Root(groups);
  };
  ChalkTalkParserImpl$ParserWorker.prototype.group_0 = function () {
    if (this.has_0(ChalkTalkTokenType$Linebreak_getInstance())) {
      this.next_0();
    }
    var id = null;
    if (this.has_0(ChalkTalkTokenType$Id_getInstance())) {
      id = this.next_0();
      this.expect_0(ChalkTalkTokenType$Begin_getInstance());
      this.expect_0(ChalkTalkTokenType$End_getInstance());
    }
    var sections = ArrayList_init();
    while (this.hasNext_0()) {
      var sec = this.section_0();
      if (sec == null)
        break;
      sections.add_11rb$(sec);
    }
    return sections.isEmpty() ? null : new Group(sections, id);
  };
  ChalkTalkParserImpl$ParserWorker.prototype.section_0 = function () {
    if (!this.hasHas_0(ChalkTalkTokenType$Name_getInstance(), ChalkTalkTokenType$Colon_getInstance())) {
      return null;
    }
    var name = this.expect_0(ChalkTalkTokenType$Name_getInstance());
    this.expect_0(ChalkTalkTokenType$Colon_getInstance());
    var args = ArrayList_init();
    while (this.hasNext_0() && !this.has_0(ChalkTalkTokenType$Begin_getInstance())) {
      var arg = this.argument_0();
      if (arg == null)
        break;
      args.add_11rb$(arg);
      if (this.hasNext_0() && !this.has_0(ChalkTalkTokenType$Begin_getInstance())) {
        this.expect_0(ChalkTalkTokenType$Comma_getInstance());
      }
    }
    this.expect_0(ChalkTalkTokenType$Begin_getInstance());
    while (this.hasNext_0()) {
      var argList = this.argumentList_0();
      if (argList == null)
        break;
      args.addAll_brywnq$(argList);
    }
    this.expect_0(ChalkTalkTokenType$End_getInstance());
    return new Section(name, args);
  };
  ChalkTalkParserImpl$ParserWorker.prototype.argumentList_0 = function () {
    if (!this.hasNext_0() || !this.has_0(ChalkTalkTokenType$DotSpace_getInstance())) {
      return null;
    }
    this.expect_0(ChalkTalkTokenType$DotSpace_getInstance());
    var grp = this.group_0();
    if (grp != null) {
      return listOf(new Argument(grp));
    }
    var argList = ArrayList_init();
    var valueArg = this.argument_0();
    if (valueArg != null) {
      argList.add_11rb$(valueArg);
      while (this.has_0(ChalkTalkTokenType$Comma_getInstance())) {
        this.next_0();
        var v = this.argument_0();
        if (v == null)
          break;
        argList.add_11rb$(v);
      }
    }
    this.expect_0(ChalkTalkTokenType$Begin_getInstance());
    this.expect_0(ChalkTalkTokenType$End_getInstance());
    return !argList.isEmpty() ? argList : null;
  };
  ChalkTalkParserImpl$ParserWorker.prototype.token_0 = function (type) {
    var tmp$;
    if (this.has_0(type)) {
      tmp$ = this.next_0();
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  };
  ChalkTalkParserImpl$ParserWorker.prototype.argument_0 = function () {
    var tmp$;
    var literal = (tmp$ = this.token_0(ChalkTalkTokenType$Statement_getInstance())) != null ? tmp$ : this.token_0(ChalkTalkTokenType$String_getInstance());
    if (literal != null) {
      return new Argument(literal);
    }
    var mapping = this.mapping_0();
    if (mapping != null) {
      return new Argument(mapping);
    }
    var target = this.tupleItem_0();
    if (target == null) {
      this.addError_0('Expected a name, abstraction, tuple, aggregate, or assignment');
      return new Argument(INVALID);
    }
    return new Argument(target);
  };
  ChalkTalkParserImpl$ParserWorker.prototype.mapping_0 = function () {
    var tmp$;
    if (!this.hasHas_0(ChalkTalkTokenType$Name_getInstance(), ChalkTalkTokenType$Equals_getInstance())) {
      return null;
    }
    var name = this.next_0();
    var equals = this.next_0();
    if (!this.hasNext_0()) {
      this.addError_0('A = must be followed by an argument', equals);
      tmp$ = INVALID;
    }
     else {
      var maybeRhs = this.next_0();
      if (maybeRhs.type === ChalkTalkTokenType$String_getInstance()) {
        tmp$ = maybeRhs;
      }
       else {
        this.addError_0('The right hand side of a = must be a string', equals);
        tmp$ = INVALID;
      }
    }
    var rhs = tmp$;
    return new Mapping(name, rhs);
  };
  ChalkTalkParserImpl$ParserWorker.prototype.assignment_0 = function () {
    if (!this.hasHas_0(ChalkTalkTokenType$Name_getInstance(), ChalkTalkTokenType$ColonEquals_getInstance())) {
      return null;
    }
    var name = this.next_0();
    var colonEquals = this.next_0();
    var rhs = this.assignmentRhs_0();
    if (rhs == null) {
      this.addError_0('A := must be followed by a argument', colonEquals);
      rhs = INVALID;
    }
    return new Assignment(name, rhs);
  };
  ChalkTalkParserImpl$ParserWorker.prototype.abstraction_0 = function () {
    var tmp$;
    var isEnclosed = false;
    var openCurly = null;
    if (this.has_0(ChalkTalkTokenType$LCurly_getInstance())) {
      isEnclosed = true;
      openCurly = this.next_0();
    }
    var parts = ArrayList_init();
    while (this.hasNext_0() && !this.has_0(ChalkTalkTokenType$RCurly_getInstance())) {
      if (!parts.isEmpty()) {
        this.expect_0(ChalkTalkTokenType$Comma_getInstance());
      }
      var part = this.abstractionPart_0();
      if (part == null && isEnclosed) {
        this.addError_0('Expected an abstraction after a {', openCurly);
      }
      if (part == null)
        break;
      parts.add_11rb$(part);
      if (!isEnclosed) {
        break;
      }
    }
    var isVarArgs = false;
    var subParams = null;
    if (isEnclosed) {
      this.expect_0(ChalkTalkTokenType$RCurly_getInstance());
      if (this.has_0(ChalkTalkTokenType$Underscore_getInstance())) {
        this.expect_0(ChalkTalkTokenType$Underscore_getInstance());
        if (this.has_0(ChalkTalkTokenType$LCurly_getInstance())) {
          this.expect_0(ChalkTalkTokenType$LCurly_getInstance());
          subParams = this.nameList_0(ChalkTalkTokenType$RCurly_getInstance());
          this.expect_0(ChalkTalkTokenType$RCurly_getInstance());
        }
         else {
          subParams = listOf(this.expect_0(ChalkTalkTokenType$Name_getInstance()));
        }
      }
      if (this.has_0(ChalkTalkTokenType$DotDotDot_getInstance())) {
        this.expect_0(ChalkTalkTokenType$DotDotDot_getInstance());
        isVarArgs = true;
      }
    }
    if (!isEnclosed && parts.isEmpty()) {
      tmp$ = null;
    }
     else {
      tmp$ = new Abstraction(isEnclosed, isVarArgs, parts, subParams);
    }
    return tmp$;
  };
  ChalkTalkParserImpl$ParserWorker.prototype.abstractionPart_0 = function () {
    if (!this.has_0(ChalkTalkTokenType$Name_getInstance())) {
      return null;
    }
    var id = this.expect_0(ChalkTalkTokenType$Name_getInstance());
    var subParams = null;
    if (this.has_0(ChalkTalkTokenType$Underscore_getInstance())) {
      this.expect_0(ChalkTalkTokenType$Underscore_getInstance());
      if (this.has_0(ChalkTalkTokenType$LCurly_getInstance())) {
        this.expect_0(ChalkTalkTokenType$LCurly_getInstance());
        subParams = this.nameList_0(ChalkTalkTokenType$RCurly_getInstance());
        this.expect_0(ChalkTalkTokenType$RCurly_getInstance());
      }
       else {
        subParams = listOf(this.expect_0(ChalkTalkTokenType$Name_getInstance()));
      }
    }
    var names = null;
    if (this.has_0(ChalkTalkTokenType$LParen_getInstance())) {
      this.expect_0(ChalkTalkTokenType$LParen_getInstance());
      names = this.nameList_0(ChalkTalkTokenType$RParen_getInstance());
      this.expect_0(ChalkTalkTokenType$RParen_getInstance());
    }
    return new AbstractionPart(id, subParams, names);
  };
  ChalkTalkParserImpl$ParserWorker.prototype.name_0 = function () {
    if (!this.has_0(ChalkTalkTokenType$Name_getInstance())) {
      if (this.hasNext_0()) {
        var peek = this.next_0();
        this.addError_0('Expected a name, but found ' + peek.text, peek);
      }
       else {
        this.addError_0('Expected a name, but found the end of input');
      }
      return INVALID;
    }
    return this.next_0();
  };
  ChalkTalkParserImpl$ParserWorker.prototype.tuple_0 = function () {
    if (!this.has_0(ChalkTalkTokenType$LParen_getInstance())) {
      return null;
    }
    var items = ArrayList_init();
    var leftParen = this.expect_0(ChalkTalkTokenType$LParen_getInstance());
    while (this.hasNext_0() && !this.has_0(ChalkTalkTokenType$RParen_getInstance())) {
      if (!items.isEmpty()) {
        this.expect_0(ChalkTalkTokenType$Comma_getInstance());
      }
      var item = this.tupleItem_0();
      if (item == null) {
        this.addError_0('Encountered a non-tuple item in a tuple', leftParen);
      }
       else {
        items.add_11rb$(item);
      }
    }
    this.expect_0(ChalkTalkTokenType$RParen_getInstance());
    return new Tuple(items);
  };
  ChalkTalkParserImpl$ParserWorker.prototype.assignmentRhs_0 = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.tuple_0()) != null ? tmp$ : this.abstraction_0()) != null ? tmp$_0 : this.name_0();
  };
  ChalkTalkParserImpl$ParserWorker.prototype.tupleItem_0 = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.assignment_0()) != null ? tmp$ : this.abstraction_0()) != null ? tmp$_0 : this.assignmentRhs_0();
  };
  ChalkTalkParserImpl$ParserWorker.prototype.hasNext_0 = function () {
    return this.chalkTalkLexer_0.hasNext();
  };
  ChalkTalkParserImpl$ParserWorker.prototype.next_0 = function () {
    return this.chalkTalkLexer_0.next();
  };
  ChalkTalkParserImpl$ParserWorker.prototype.addError_0 = function (message, token) {
    if (token === void 0)
      token = null;
    var tmp$, tmp$_0;
    var row = (tmp$ = token != null ? token.row : null) != null ? tmp$ : -1;
    var column = (tmp$_0 = token != null ? token.column : null) != null ? tmp$_0 : -1;
    this.errors.add_11rb$(new ParseError(message, row, column));
  };
  ChalkTalkParserImpl$ParserWorker.prototype.nameList_0 = function (stopType) {
    var names = ArrayList_init();
    while (this.hasNext_0() && !this.has_0(stopType)) {
      var comma = null;
      if (!names.isEmpty()) {
        comma = this.expect_0(ChalkTalkTokenType$Comma_getInstance());
      }
      if (!this.hasNext_0()) {
        this.addError_0('Expected a name to follow a comma', comma);
        break;
      }
      var tok = this.next_0();
      if (tok.type === ChalkTalkTokenType$Name_getInstance()) {
        names.add_11rb$(tok);
      }
       else {
        this.addError_0("Expected a name but found '" + tok.text + "'", tok);
      }
    }
    return names;
  };
  ChalkTalkParserImpl$ParserWorker.prototype.has_0 = function (type) {
    return this.hasNext_0() && this.chalkTalkLexer_0.peek().type === type;
  };
  ChalkTalkParserImpl$ParserWorker.prototype.hasHas_0 = function (type, thenType) {
    return this.has_0(type) && this.chalkTalkLexer_0.hasNextNext() && this.chalkTalkLexer_0.peekPeek().type === thenType;
  };
  ChalkTalkParserImpl$ParserWorker.prototype.expect_0 = function (type) {
    var tmp$;
    if (!this.hasNext_0() || this.chalkTalkLexer_0.peek().type !== type) {
      if (this.hasNext_0()) {
        tmp$ = this.chalkTalkLexer_0.peek();
      }
       else {
        tmp$ = INVALID;
      }
      var peek = tmp$;
      this.addError_0('Expected a token of type ' + type + ' but found ' + peek.type, peek);
      return INVALID;
    }
    return this.next_0();
  };
  ChalkTalkParserImpl$ParserWorker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserWorker',
    interfaces: []
  };
  ChalkTalkParserImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChalkTalkParserImpl',
    interfaces: [ChalkTalkParser]
  };
  function Phase1Node() {
  }
  Phase1Node.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Phase1Node',
    interfaces: []
  };
  function Root(groups) {
    this.groups = groups;
  }
  Root.prototype.forEach_t0jmzf$ = function (fn) {
    var tmp$;
    tmp$ = this.groups.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  Root.prototype.print_0 = function (buffer) {
    var tmp$;
    tmp$ = this.groups.iterator();
    while (tmp$.hasNext()) {
      var grp = tmp$.next();
      grp.print_yrfq27$(buffer, 0, false);
    }
  };
  Root.prototype.toCode = function () {
    var buffer = StringBuilder_init();
    this.print_0(buffer);
    return buffer.toString();
  };
  Root.prototype.resolve = function () {
    return this;
  };
  Root.prototype.transform_w8pxcw$ = function (transformer) {
    var $receiver = this.groups;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_w8pxcw$(transformer), Group) ? tmp$_0 : throwCCE());
    }
    return transformer(new Root(destination));
  };
  Root.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Root',
    interfaces: [Phase1Node]
  };
  Root.prototype.component1 = function () {
    return this.groups;
  };
  Root.prototype.copy_h9xwie$ = function (groups) {
    return new Root(groups === void 0 ? this.groups : groups);
  };
  Root.prototype.toString = function () {
    return 'Root(groups=' + Kotlin.toString(this.groups) + ')';
  };
  Root.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.groups) | 0;
    return result;
  };
  Root.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.groups, other.groups))));
  };
  function Argument(chalkTalkTarget) {
    this.chalkTalkTarget = chalkTalkTarget;
  }
  Argument.prototype.forEach_t0jmzf$ = function (fn) {
    fn(this.chalkTalkTarget);
  };
  Argument.prototype.print_rg88dk$ = function (buffer, level) {
    var tmp$;
    tmp$ = this.chalkTalkTarget;
    if (Kotlin.isType(tmp$, Group))
      this.chalkTalkTarget.print_yrfq27$(buffer, level, true);
    else if (Kotlin.isType(tmp$, Phase1Token)) {
      buffer.append_gw00v9$(buildIndent(level, true));
      buffer.append_gw00v9$(this.chalkTalkTarget.text);
      buffer.append_gw00v9$('\n');
    }
     else if (Kotlin.isType(tmp$, Abstraction)) {
      buffer.append_gw00v9$(buildIndent(level, true));
      buffer.append_gw00v9$(this.chalkTalkTarget.toCode());
      buffer.append_gw00v9$('\n');
    }
     else if (Kotlin.isType(tmp$, Assignment)) {
      buffer.append_gw00v9$(buildIndent(level, true));
      buffer.append_gw00v9$(this.chalkTalkTarget.toCode());
      buffer.append_gw00v9$('\n');
    }
     else if (Kotlin.isType(tmp$, Mapping)) {
      buffer.append_gw00v9$(buildIndent(level, true));
      buffer.append_gw00v9$(this.chalkTalkTarget.toCode());
      buffer.append_gw00v9$('\n');
    }
     else if (Kotlin.isType(tmp$, Tuple)) {
      buffer.append_gw00v9$(buildIndent(level, true));
      buffer.append_gw00v9$(this.chalkTalkTarget.toCode());
      buffer.append_gw00v9$('\n');
    }
     else if (Kotlin.isType(tmp$, AbstractionPart))
      throw RuntimeException_init('Argument.print: Unexpected AbstractionPart encountered');
    else
      Kotlin.noWhenBranchMatched();
  };
  Argument.prototype.toCode = function () {
    var buffer = StringBuilder_init();
    this.print_rg88dk$(buffer, 0);
    return buffer.toString();
  };
  Argument.prototype.resolve = function () {
    return this.chalkTalkTarget.resolve();
  };
  Argument.prototype.transform_w8pxcw$ = function (transformer) {
    var tmp$;
    return transformer(new Argument(Kotlin.isType(tmp$ = this.chalkTalkTarget.transform_w8pxcw$(transformer), Phase1Target) ? tmp$ : throwCCE()));
  };
  Argument.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Argument',
    interfaces: [Phase1Node]
  };
  Argument.prototype.component1 = function () {
    return this.chalkTalkTarget;
  };
  Argument.prototype.copy_g40oyj$ = function (chalkTalkTarget) {
    return new Argument(chalkTalkTarget === void 0 ? this.chalkTalkTarget : chalkTalkTarget);
  };
  Argument.prototype.toString = function () {
    return 'Argument(chalkTalkTarget=' + Kotlin.toString(this.chalkTalkTarget) + ')';
  };
  Argument.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.chalkTalkTarget) | 0;
    return result;
  };
  Argument.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.chalkTalkTarget, other.chalkTalkTarget))));
  };
  function Section(name, args) {
    this.name = name;
    this.args = args;
  }
  Section.prototype.forEach_t0jmzf$ = function (fn) {
    fn(this.name);
    var tmp$;
    tmp$ = this.args.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  Section.prototype.print_yrfq27$ = function (buffer, level, fromArg) {
    var tmp$;
    buffer.append_gw00v9$(buildIndent(level, fromArg));
    buffer.append_gw00v9$(this.name.text);
    buffer.append_gw00v9$(':\n');
    tmp$ = this.args.iterator();
    while (tmp$.hasNext()) {
      var arg = tmp$.next();
      arg.print_rg88dk$(buffer, level + 1 | 0);
    }
  };
  Section.prototype.toCode = function () {
    var buffer = StringBuilder_init();
    this.print_yrfq27$(buffer, 0, false);
    return buffer.toString();
  };
  Section.prototype.resolve = function () {
    return this;
  };
  Section.prototype.transform_w8pxcw$ = function (transformer) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = this.name.transform_w8pxcw$(transformer), Phase1Token) ? tmp$ : throwCCE();
    var $receiver = this.args;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2;
      destination.add_11rb$(Kotlin.isType(tmp$_2 = item.transform_w8pxcw$(transformer), Argument) ? tmp$_2 : throwCCE());
    }
    return transformer(new Section(tmp$_0, destination));
  };
  Section.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Section',
    interfaces: [Phase1Node]
  };
  Section.prototype.component1 = function () {
    return this.name;
  };
  Section.prototype.component2 = function () {
    return this.args;
  };
  Section.prototype.copy_f42m9b$ = function (name, args) {
    return new Section(name === void 0 ? this.name : name, args === void 0 ? this.args : args);
  };
  Section.prototype.toString = function () {
    return 'Section(name=' + Kotlin.toString(this.name) + (', args=' + Kotlin.toString(this.args)) + ')';
  };
  Section.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    return result;
  };
  Section.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.args, other.args)))));
  };
  function ChalkTalkTokenType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ChalkTalkTokenType_initFields() {
    ChalkTalkTokenType_initFields = function () {
    };
    ChalkTalkTokenType$DotSpace_instance = new ChalkTalkTokenType('DotSpace', 0);
    ChalkTalkTokenType$Name_instance = new ChalkTalkTokenType('Name', 1);
    ChalkTalkTokenType$Colon_instance = new ChalkTalkTokenType('Colon', 2);
    ChalkTalkTokenType$String_instance = new ChalkTalkTokenType('String', 3);
    ChalkTalkTokenType$Statement_instance = new ChalkTalkTokenType('Statement', 4);
    ChalkTalkTokenType$Id_instance = new ChalkTalkTokenType('Id', 5);
    ChalkTalkTokenType$Comma_instance = new ChalkTalkTokenType('Comma', 6);
    ChalkTalkTokenType$Begin_instance = new ChalkTalkTokenType('Begin', 7);
    ChalkTalkTokenType$End_instance = new ChalkTalkTokenType('End', 8);
    ChalkTalkTokenType$Linebreak_instance = new ChalkTalkTokenType('Linebreak', 9);
    ChalkTalkTokenType$Invalid_instance = new ChalkTalkTokenType('Invalid', 10);
    ChalkTalkTokenType$Equals_instance = new ChalkTalkTokenType('Equals', 11);
    ChalkTalkTokenType$ColonEquals_instance = new ChalkTalkTokenType('ColonEquals', 12);
    ChalkTalkTokenType$LParen_instance = new ChalkTalkTokenType('LParen', 13);
    ChalkTalkTokenType$RParen_instance = new ChalkTalkTokenType('RParen', 14);
    ChalkTalkTokenType$LCurly_instance = new ChalkTalkTokenType('LCurly', 15);
    ChalkTalkTokenType$RCurly_instance = new ChalkTalkTokenType('RCurly', 16);
    ChalkTalkTokenType$Underscore_instance = new ChalkTalkTokenType('Underscore', 17);
    ChalkTalkTokenType$DotDotDot_instance = new ChalkTalkTokenType('DotDotDot', 18);
  }
  var ChalkTalkTokenType$DotSpace_instance;
  function ChalkTalkTokenType$DotSpace_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$DotSpace_instance;
  }
  var ChalkTalkTokenType$Name_instance;
  function ChalkTalkTokenType$Name_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Name_instance;
  }
  var ChalkTalkTokenType$Colon_instance;
  function ChalkTalkTokenType$Colon_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Colon_instance;
  }
  var ChalkTalkTokenType$String_instance;
  function ChalkTalkTokenType$String_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$String_instance;
  }
  var ChalkTalkTokenType$Statement_instance;
  function ChalkTalkTokenType$Statement_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Statement_instance;
  }
  var ChalkTalkTokenType$Id_instance;
  function ChalkTalkTokenType$Id_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Id_instance;
  }
  var ChalkTalkTokenType$Comma_instance;
  function ChalkTalkTokenType$Comma_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Comma_instance;
  }
  var ChalkTalkTokenType$Begin_instance;
  function ChalkTalkTokenType$Begin_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Begin_instance;
  }
  var ChalkTalkTokenType$End_instance;
  function ChalkTalkTokenType$End_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$End_instance;
  }
  var ChalkTalkTokenType$Linebreak_instance;
  function ChalkTalkTokenType$Linebreak_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Linebreak_instance;
  }
  var ChalkTalkTokenType$Invalid_instance;
  function ChalkTalkTokenType$Invalid_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Invalid_instance;
  }
  var ChalkTalkTokenType$Equals_instance;
  function ChalkTalkTokenType$Equals_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Equals_instance;
  }
  var ChalkTalkTokenType$ColonEquals_instance;
  function ChalkTalkTokenType$ColonEquals_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$ColonEquals_instance;
  }
  var ChalkTalkTokenType$LParen_instance;
  function ChalkTalkTokenType$LParen_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$LParen_instance;
  }
  var ChalkTalkTokenType$RParen_instance;
  function ChalkTalkTokenType$RParen_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$RParen_instance;
  }
  var ChalkTalkTokenType$LCurly_instance;
  function ChalkTalkTokenType$LCurly_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$LCurly_instance;
  }
  var ChalkTalkTokenType$RCurly_instance;
  function ChalkTalkTokenType$RCurly_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$RCurly_instance;
  }
  var ChalkTalkTokenType$Underscore_instance;
  function ChalkTalkTokenType$Underscore_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$Underscore_instance;
  }
  var ChalkTalkTokenType$DotDotDot_instance;
  function ChalkTalkTokenType$DotDotDot_getInstance() {
    ChalkTalkTokenType_initFields();
    return ChalkTalkTokenType$DotDotDot_instance;
  }
  ChalkTalkTokenType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChalkTalkTokenType',
    interfaces: [Enum]
  };
  function ChalkTalkTokenType$values() {
    return [ChalkTalkTokenType$DotSpace_getInstance(), ChalkTalkTokenType$Name_getInstance(), ChalkTalkTokenType$Colon_getInstance(), ChalkTalkTokenType$String_getInstance(), ChalkTalkTokenType$Statement_getInstance(), ChalkTalkTokenType$Id_getInstance(), ChalkTalkTokenType$Comma_getInstance(), ChalkTalkTokenType$Begin_getInstance(), ChalkTalkTokenType$End_getInstance(), ChalkTalkTokenType$Linebreak_getInstance(), ChalkTalkTokenType$Invalid_getInstance(), ChalkTalkTokenType$Equals_getInstance(), ChalkTalkTokenType$ColonEquals_getInstance(), ChalkTalkTokenType$LParen_getInstance(), ChalkTalkTokenType$RParen_getInstance(), ChalkTalkTokenType$LCurly_getInstance(), ChalkTalkTokenType$RCurly_getInstance(), ChalkTalkTokenType$Underscore_getInstance(), ChalkTalkTokenType$DotDotDot_getInstance()];
  }
  ChalkTalkTokenType.values = ChalkTalkTokenType$values;
  function ChalkTalkTokenType$valueOf(name) {
    switch (name) {
      case 'DotSpace':
        return ChalkTalkTokenType$DotSpace_getInstance();
      case 'Name':
        return ChalkTalkTokenType$Name_getInstance();
      case 'Colon':
        return ChalkTalkTokenType$Colon_getInstance();
      case 'String':
        return ChalkTalkTokenType$String_getInstance();
      case 'Statement':
        return ChalkTalkTokenType$Statement_getInstance();
      case 'Id':
        return ChalkTalkTokenType$Id_getInstance();
      case 'Comma':
        return ChalkTalkTokenType$Comma_getInstance();
      case 'Begin':
        return ChalkTalkTokenType$Begin_getInstance();
      case 'End':
        return ChalkTalkTokenType$End_getInstance();
      case 'Linebreak':
        return ChalkTalkTokenType$Linebreak_getInstance();
      case 'Invalid':
        return ChalkTalkTokenType$Invalid_getInstance();
      case 'Equals':
        return ChalkTalkTokenType$Equals_getInstance();
      case 'ColonEquals':
        return ChalkTalkTokenType$ColonEquals_getInstance();
      case 'LParen':
        return ChalkTalkTokenType$LParen_getInstance();
      case 'RParen':
        return ChalkTalkTokenType$RParen_getInstance();
      case 'LCurly':
        return ChalkTalkTokenType$LCurly_getInstance();
      case 'RCurly':
        return ChalkTalkTokenType$RCurly_getInstance();
      case 'Underscore':
        return ChalkTalkTokenType$Underscore_getInstance();
      case 'DotDotDot':
        return ChalkTalkTokenType$DotDotDot_getInstance();
      default:throwISE('No enum constant mathlingua.common.chalktalk.phase1.ast.ChalkTalkTokenType.' + name);
    }
  }
  ChalkTalkTokenType.valueOf_61zpoe$ = ChalkTalkTokenType$valueOf;
  function Phase1Target() {
  }
  Phase1Target.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Phase1Target',
    interfaces: [Phase1Node]
  };
  function Mapping(lhs, rhs) {
    Phase1Target.call(this);
    this.lhs = lhs;
    this.rhs = rhs;
  }
  Mapping.prototype.forEach_t0jmzf$ = function (fn) {
    fn(this.lhs);
    fn(this.rhs);
  };
  Mapping.prototype.toCode = function () {
    return this.lhs.toCode() + ' = ' + this.rhs.toCode();
  };
  Mapping.prototype.resolve = function () {
    return this;
  };
  Mapping.prototype.transform_w8pxcw$ = function (transformer) {
    var tmp$, tmp$_0;
    return transformer(new Mapping(Kotlin.isType(tmp$ = this.lhs.transform_w8pxcw$(transformer), Phase1Token) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.rhs.transform_w8pxcw$(transformer), Phase1Token) ? tmp$_0 : throwCCE()));
  };
  Mapping.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mapping',
    interfaces: [Phase1Target]
  };
  Mapping.prototype.component1 = function () {
    return this.lhs;
  };
  Mapping.prototype.component2 = function () {
    return this.rhs;
  };
  Mapping.prototype.copy_t0oob0$ = function (lhs, rhs) {
    return new Mapping(lhs === void 0 ? this.lhs : lhs, rhs === void 0 ? this.rhs : rhs);
  };
  Mapping.prototype.toString = function () {
    return 'Mapping(lhs=' + Kotlin.toString(this.lhs) + (', rhs=' + Kotlin.toString(this.rhs)) + ')';
  };
  Mapping.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lhs) | 0;
    result = result * 31 + Kotlin.hashCode(this.rhs) | 0;
    return result;
  };
  Mapping.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lhs, other.lhs) && Kotlin.equals(this.rhs, other.rhs)))));
  };
  function Group(sections, id) {
    Phase1Target.call(this);
    this.sections = sections;
    this.id = id;
  }
  Group.prototype.forEach_t0jmzf$ = function (fn) {
    if (this.id != null) {
      fn(this.id);
    }
    var tmp$;
    tmp$ = this.sections.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  Group.prototype.print_yrfq27$ = function (buffer, level, fromArg) {
    var tmp$;
    if (this.id != null) {
      buffer.append_gw00v9$(this.id.text);
      buffer.append_gw00v9$('\n');
    }
    var first = true;
    tmp$ = this.sections.iterator();
    while (tmp$.hasNext()) {
      var sect = tmp$.next();
      if (first) {
        sect.print_yrfq27$(buffer, level, fromArg && this.id == null);
      }
       else {
        sect.print_yrfq27$(buffer, level, false);
      }
      first = false;
    }
  };
  Group.prototype.toCode = function () {
    var buffer = StringBuilder_init();
    this.print_yrfq27$(buffer, 0, false);
    return buffer.toString();
  };
  Group.prototype.resolve = function () {
    return this;
  };
  Group.prototype.transform_w8pxcw$ = function (transformer) {
    var tmp$, tmp$_0;
    var $receiver = this.sections;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2;
      destination.add_11rb$(Kotlin.isType(tmp$_2 = item.transform_w8pxcw$(transformer), Section) ? tmp$_2 : throwCCE());
    }
    return transformer(new Group(destination, Kotlin.isType(tmp$_0 = (tmp$ = this.id) != null ? tmp$.transform_w8pxcw$(transformer) : null, Phase1Token) ? tmp$_0 : throwCCE()));
  };
  Group.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Group',
    interfaces: [Phase1Target]
  };
  Group.prototype.component1 = function () {
    return this.sections;
  };
  Group.prototype.component2 = function () {
    return this.id;
  };
  Group.prototype.copy_r7lnki$ = function (sections, id) {
    return new Group(sections === void 0 ? this.sections : sections, id === void 0 ? this.id : id);
  };
  Group.prototype.toString = function () {
    return 'Group(sections=' + Kotlin.toString(this.sections) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  Group.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sections) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  Group.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sections, other.sections) && Kotlin.equals(this.id, other.id)))));
  };
  function TupleItem() {
    Phase1Target.call(this);
  }
  TupleItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TupleItem',
    interfaces: [Phase1Target]
  };
  function Assignment(lhs, rhs) {
    TupleItem.call(this);
    this.lhs = lhs;
    this.rhs = rhs;
  }
  Assignment.prototype.forEach_t0jmzf$ = function (fn) {
    fn(this.lhs);
    fn(this.rhs);
  };
  Assignment.prototype.toCode = function () {
    return this.lhs.toCode() + ' := ' + this.rhs.toCode();
  };
  Assignment.prototype.resolve = function () {
    return this;
  };
  Assignment.prototype.transform_w8pxcw$ = function (transformer) {
    var tmp$, tmp$_0;
    return transformer(new Assignment(Kotlin.isType(tmp$ = this.lhs.transform_w8pxcw$(transformer), Phase1Token) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.rhs.transform_w8pxcw$(transformer), Phase1Token) ? tmp$_0 : throwCCE()));
  };
  Assignment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Assignment',
    interfaces: [TupleItem]
  };
  Assignment.prototype.component1 = function () {
    return this.lhs;
  };
  Assignment.prototype.component2 = function () {
    return this.rhs;
  };
  Assignment.prototype.copy_71r553$ = function (lhs, rhs) {
    return new Assignment(lhs === void 0 ? this.lhs : lhs, rhs === void 0 ? this.rhs : rhs);
  };
  Assignment.prototype.toString = function () {
    return 'Assignment(lhs=' + Kotlin.toString(this.lhs) + (', rhs=' + Kotlin.toString(this.rhs)) + ')';
  };
  Assignment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lhs) | 0;
    result = result * 31 + Kotlin.hashCode(this.rhs) | 0;
    return result;
  };
  Assignment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lhs, other.lhs) && Kotlin.equals(this.rhs, other.rhs)))));
  };
  function AssignmentRhs() {
    TupleItem.call(this);
  }
  AssignmentRhs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssignmentRhs',
    interfaces: [TupleItem]
  };
  function Phase1Token(text, type, row, column) {
    AssignmentRhs.call(this);
    this.text = text;
    this.type = type;
    this.row = row;
    this.column = column;
  }
  Phase1Token.prototype.forEach_t0jmzf$ = function (fn) {
  };
  Phase1Token.prototype.toCode = function () {
    return this.text;
  };
  Phase1Token.prototype.resolve = function () {
    return this;
  };
  Phase1Token.prototype.transform_w8pxcw$ = function (transformer) {
    return transformer(this);
  };
  Phase1Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Phase1Token',
    interfaces: [AssignmentRhs]
  };
  Phase1Token.prototype.component1 = function () {
    return this.text;
  };
  Phase1Token.prototype.component2 = function () {
    return this.type;
  };
  Phase1Token.prototype.component3 = function () {
    return this.row;
  };
  Phase1Token.prototype.component4 = function () {
    return this.column;
  };
  Phase1Token.prototype.copy_m2738k$ = function (text, type, row, column) {
    return new Phase1Token(text === void 0 ? this.text : text, type === void 0 ? this.type : type, row === void 0 ? this.row : row, column === void 0 ? this.column : column);
  };
  Phase1Token.prototype.toString = function () {
    return 'Phase1Token(text=' + Kotlin.toString(this.text) + (', type=' + Kotlin.toString(this.type)) + (', row=' + Kotlin.toString(this.row)) + (', column=' + Kotlin.toString(this.column)) + ')';
  };
  Phase1Token.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    return result;
  };
  Phase1Token.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.row, other.row) && Kotlin.equals(this.column, other.column)))));
  };
  function Tuple(items) {
    AssignmentRhs.call(this);
    this.items = items;
  }
  Tuple.prototype.forEach_t0jmzf$ = function (fn) {
    var tmp$;
    tmp$ = this.items.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  Tuple.prototype.toCode = function () {
    var tmp$;
    var builder = StringBuilder_init();
    builder.append_s8itvh$(40);
    tmp$ = this.items;
    for (var i = 0; i !== tmp$.size; ++i) {
      builder.append_gw00v9$(this.items.get_za3lpa$(i).toCode());
      if (i !== (this.items.size - 1 | 0)) {
        builder.append_gw00v9$(', ');
      }
    }
    builder.append_s8itvh$(41);
    return builder.toString();
  };
  Tuple.prototype.resolve = function () {
    return this;
  };
  Tuple.prototype.transform_w8pxcw$ = function (transformer) {
    var $receiver = this.items;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_w8pxcw$(transformer), TupleItem) ? tmp$_0 : throwCCE());
    }
    return transformer(new Tuple(destination));
  };
  Tuple.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tuple',
    interfaces: [AssignmentRhs]
  };
  Tuple.prototype.component1 = function () {
    return this.items;
  };
  Tuple.prototype.copy_w950eq$ = function (items) {
    return new Tuple(items === void 0 ? this.items : items);
  };
  Tuple.prototype.toString = function () {
    return 'Tuple(items=' + Kotlin.toString(this.items) + ')';
  };
  Tuple.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  Tuple.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function Abstraction(isEnclosed, isVarArgs, parts, subParams) {
    AssignmentRhs.call(this);
    this.isEnclosed = isEnclosed;
    this.isVarArgs = isVarArgs;
    this.parts = parts;
    this.subParams = subParams;
  }
  Abstraction.prototype.forEach_t0jmzf$ = function (fn) {
    var tmp$;
    tmp$ = this.parts.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  Abstraction.prototype.toCode = function () {
    var tmp$, tmp$_0;
    var builder = StringBuilder_init();
    if (this.isEnclosed) {
      builder.append_s8itvh$(123);
    }
    tmp$ = this.parts;
    for (var i = 0; i !== tmp$.size; ++i) {
      builder.append_gw00v9$(this.parts.get_za3lpa$(i).toCode());
      if (i !== (this.parts.size - 1 | 0)) {
        builder.append_gw00v9$(', ');
      }
    }
    if (this.isEnclosed) {
      builder.append_s8itvh$(125);
      if (this.subParams != null) {
        builder.append_s8itvh$(95);
        if (this.subParams.size === 1) {
          builder.append_gw00v9$(this.subParams.get_za3lpa$(0).toCode());
        }
         else {
          builder.append_s8itvh$(123);
          tmp$_0 = this.subParams;
          for (var i_0 = 0; i_0 !== tmp$_0.size; ++i_0) {
            builder.append_gw00v9$(this.subParams.get_za3lpa$(i_0).toCode());
            if (i_0 !== (this.subParams.size - 1 | 0)) {
              builder.append_gw00v9$(', ');
            }
          }
          builder.append_s8itvh$(125);
        }
      }
    }
    if (this.isVarArgs) {
      builder.append_gw00v9$('...');
    }
    return builder.toString();
  };
  Abstraction.prototype.resolve = function () {
    return this;
  };
  Abstraction.prototype.transform_w8pxcw$ = function (transformer) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.isEnclosed;
    tmp$_0 = this.isVarArgs;
    var $receiver = this.parts;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_3;
      destination.add_11rb$(Kotlin.isType(tmp$_3 = item.transform_w8pxcw$(transformer), AbstractionPart) ? tmp$_3 : throwCCE());
    }
    var tmp$_4;
    if ((tmp$_1 = this.subParams) != null) {
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(tmp$_1, 10));
      var tmp$_5;
      tmp$_5 = tmp$_1.iterator();
      while (tmp$_5.hasNext()) {
        var item_0 = tmp$_5.next();
        var tmp$_6;
        destination_0.add_11rb$(Kotlin.isType(tmp$_6 = item_0.transform_w8pxcw$(transformer), Phase1Token) ? tmp$_6 : throwCCE());
      }
      tmp$_4 = destination_0;
    }
     else
      tmp$_4 = null;
    return transformer(new Abstraction(tmp$, tmp$_0, destination, tmp$_4));
  };
  Abstraction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Abstraction',
    interfaces: [AssignmentRhs]
  };
  Abstraction.prototype.component1 = function () {
    return this.isEnclosed;
  };
  Abstraction.prototype.component2 = function () {
    return this.isVarArgs;
  };
  Abstraction.prototype.component3 = function () {
    return this.parts;
  };
  Abstraction.prototype.component4 = function () {
    return this.subParams;
  };
  Abstraction.prototype.copy_ofhqv1$ = function (isEnclosed, isVarArgs, parts, subParams) {
    return new Abstraction(isEnclosed === void 0 ? this.isEnclosed : isEnclosed, isVarArgs === void 0 ? this.isVarArgs : isVarArgs, parts === void 0 ? this.parts : parts, subParams === void 0 ? this.subParams : subParams);
  };
  Abstraction.prototype.toString = function () {
    return 'Abstraction(isEnclosed=' + Kotlin.toString(this.isEnclosed) + (', isVarArgs=' + Kotlin.toString(this.isVarArgs)) + (', parts=' + Kotlin.toString(this.parts)) + (', subParams=' + Kotlin.toString(this.subParams)) + ')';
  };
  Abstraction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.isEnclosed) | 0;
    result = result * 31 + Kotlin.hashCode(this.isVarArgs) | 0;
    result = result * 31 + Kotlin.hashCode(this.parts) | 0;
    result = result * 31 + Kotlin.hashCode(this.subParams) | 0;
    return result;
  };
  Abstraction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.isEnclosed, other.isEnclosed) && Kotlin.equals(this.isVarArgs, other.isVarArgs) && Kotlin.equals(this.parts, other.parts) && Kotlin.equals(this.subParams, other.subParams)))));
  };
  function AbstractionPart(name, subParams, params) {
    AssignmentRhs.call(this);
    this.name = name;
    this.subParams = subParams;
    this.params = params;
  }
  AbstractionPart.prototype.forEach_t0jmzf$ = function (fn) {
    var tmp$, tmp$_0;
    fn(this.name);
    if ((tmp$ = this.subParams) != null) {
      var tmp$_1;
      tmp$_1 = tmp$.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        fn(element);
      }
    }
    if ((tmp$_0 = this.params) != null) {
      var tmp$_2;
      tmp$_2 = tmp$_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        fn(element_0);
      }
    }
  };
  AbstractionPart.prototype.toCode = function () {
    var tmp$, tmp$_0;
    var builder = StringBuilder_init();
    builder.append_gw00v9$(this.name.toCode());
    if (this.subParams != null) {
      builder.append_s8itvh$(95);
      if (this.subParams.size === 1) {
        builder.append_gw00v9$(this.subParams.get_za3lpa$(0).toCode());
      }
       else {
        builder.append_s8itvh$(123);
        tmp$ = this.subParams;
        for (var i = 0; i !== tmp$.size; ++i) {
          builder.append_gw00v9$(this.subParams.get_za3lpa$(i).toCode());
          if (i !== (this.subParams.size - 1 | 0)) {
            builder.append_gw00v9$(', ');
          }
        }
        builder.append_s8itvh$(125);
      }
    }
    if (this.params != null) {
      builder.append_s8itvh$(40);
      tmp$_0 = this.params;
      for (var i_0 = 0; i_0 !== tmp$_0.size; ++i_0) {
        builder.append_gw00v9$(this.params.get_za3lpa$(i_0).toCode());
        if (i_0 !== (this.params.size - 1 | 0)) {
          builder.append_gw00v9$(', ');
        }
      }
      builder.append_s8itvh$(41);
    }
    return builder.toString();
  };
  AbstractionPart.prototype.resolve = function () {
    return this;
  };
  AbstractionPart.prototype.transform_w8pxcw$ = function (transformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_0 = Kotlin.isType(tmp$ = this.name.transform_w8pxcw$(transformer), Phase1Token) ? tmp$ : throwCCE();
    var tmp$_4;
    if ((tmp$_1 = this.subParams) != null) {
      var destination = ArrayList_init_0(collectionSizeOrDefault(tmp$_1, 10));
      var tmp$_5;
      tmp$_5 = tmp$_1.iterator();
      while (tmp$_5.hasNext()) {
        var item = tmp$_5.next();
        var tmp$_6;
        destination.add_11rb$(Kotlin.isType(tmp$_6 = item.transform_w8pxcw$(transformer), Phase1Token) ? tmp$_6 : throwCCE());
      }
      tmp$_4 = destination;
    }
     else
      tmp$_4 = null;
    tmp$_2 = tmp$_4;
    var tmp$_7;
    if ((tmp$_3 = this.params) != null) {
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(tmp$_3, 10));
      var tmp$_8;
      tmp$_8 = tmp$_3.iterator();
      while (tmp$_8.hasNext()) {
        var item_0 = tmp$_8.next();
        var tmp$_9;
        destination_0.add_11rb$(Kotlin.isType(tmp$_9 = item_0.transform_w8pxcw$(transformer), Phase1Token) ? tmp$_9 : throwCCE());
      }
      tmp$_7 = destination_0;
    }
     else
      tmp$_7 = null;
    return transformer(new AbstractionPart(tmp$_0, tmp$_2, tmp$_7));
  };
  AbstractionPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractionPart',
    interfaces: [AssignmentRhs]
  };
  AbstractionPart.prototype.component1 = function () {
    return this.name;
  };
  AbstractionPart.prototype.component2 = function () {
    return this.subParams;
  };
  AbstractionPart.prototype.component3 = function () {
    return this.params;
  };
  AbstractionPart.prototype.copy_k9cflt$ = function (name, subParams, params) {
    return new AbstractionPart(name === void 0 ? this.name : name, subParams === void 0 ? this.subParams : subParams, params === void 0 ? this.params : params);
  };
  AbstractionPart.prototype.toString = function () {
    return 'AbstractionPart(name=' + Kotlin.toString(this.name) + (', subParams=' + Kotlin.toString(this.subParams)) + (', params=' + Kotlin.toString(this.params)) + ')';
  };
  AbstractionPart.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.subParams) | 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    return result;
  };
  AbstractionPart.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.subParams, other.subParams) && Kotlin.equals(this.params, other.params)))));
  };
  function buildIndent(level, isArg) {
    var buffer = StringBuilder_init();
    var tmp$;
    if (isArg) {
      var a = level - 1 | 0;
      tmp$ = 2 * Math_0.max(a, 0) | 0;
    }
     else
      tmp$ = 2 * level | 0;
    var numSpaces = tmp$;
    for (var i = 0; i < numSpaces; i++) {
      buffer.append_s8itvh$(32);
    }
    if (isArg) {
      buffer.append_gw00v9$('. ');
    }
    return buffer.toString();
  }
  function getRow$lambda(closure$rowResult) {
    return function (it) {
      if (closure$rowResult.v === -1) {
        var row = getRow(it);
        if (row >= 0) {
          closure$rowResult.v = row;
        }
      }
      return Unit;
    };
  }
  function getRow(node) {
    if (Kotlin.isType(node, Phase1Token)) {
      return node.row;
    }
    var rowResult = {v: -1};
    node.forEach_t0jmzf$(getRow$lambda(rowResult));
    return rowResult.v;
  }
  function getColumn$lambda(closure$colResult) {
    return function (it) {
      if (closure$colResult.v === -1) {
        var col = getColumn(it);
        if (col >= 0) {
          closure$colResult.v = col;
        }
      }
      return Unit;
    };
  }
  function getColumn(node) {
    if (Kotlin.isType(node, Phase1Token)) {
      return node.column;
    }
    var colResult = {v: -1};
    node.forEach_t0jmzf$(getColumn$lambda(colResult));
    return colResult.v;
  }
  function CodeWriter() {
  }
  CodeWriter.prototype.writeNewline_za3lpa$ = function (count, callback$default) {
    if (count === void 0)
      count = 1;
    callback$default ? callback$default(count) : this.writeNewline_za3lpa$$default(count);
  };
  CodeWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CodeWriter',
    interfaces: []
  };
  function HtmlCodeWriter(defines, represents) {
    this.defines = defines;
    this.represents = represents;
    this.builder = StringBuilder_init();
  }
  HtmlCodeWriter.prototype.append_v8axul$ = function (node, hasDot, indent) {
    this.builder.append_gw00v9$(node.toCode_pc06dk$(hasDot, indent, this.newCodeWriter_g8umse$(this.defines)).getCode());
  };
  HtmlCodeWriter.prototype.writeHeader_61zpoe$ = function (header) {
    this.builder.append_gw00v9$("<span class='mathlingua-header'>");
    this.builder.append_gw00v9$(header);
    this.builder.append_s8itvh$(58);
    this.builder.append_gw00v9$('<\/span>');
  };
  HtmlCodeWriter.prototype.writeNewline_za3lpa$$default = function (count) {
    for (var i = 0; i < count; i++) {
      this.builder.append_gw00v9$('<br/>');
    }
  };
  HtmlCodeWriter.prototype.writeSpace = function () {
    this.builder.append_gw00v9$("<span class='mathlingua-whitespace'><\/span>");
  };
  HtmlCodeWriter.prototype.writeDot = function () {
    this.builder.append_gw00v9$("<span class='mathlingua-dot'>");
    this.builder.append_s8itvh$(46);
    this.builder.append_gw00v9$('<\/span>');
  };
  HtmlCodeWriter.prototype.writeComma = function () {
    this.builder.append_gw00v9$("<span class='mathlingua-comma'>");
    this.builder.append_s8itvh$(44);
    this.builder.append_gw00v9$('<\/span>');
  };
  HtmlCodeWriter.prototype.writeIndent_eltk6l$ = function (hasDot, indent) {
    var tmp$;
    tmp$ = indent - 2 | 0;
    for (var i = 0; i < tmp$; i++) {
      this.writeSpace();
    }
    if ((indent - 2 | 0) >= 0) {
      if (hasDot) {
        this.writeDot();
      }
       else {
        this.writeSpace();
      }
    }
    if ((indent - 1 | 0) >= 0) {
      this.writeSpace();
    }
  };
  HtmlCodeWriter.prototype.writePhase1Node_baevx2$ = function (phase1Node) {
    this.builder.append_gw00v9$("<span class='mathlingua-argument'>");
    var code = prettyPrintIdentifier(phase1Node.toCode());
    var tmp$ = this.builder;
    var tmp$_0 = '\\' + '[';
    var $receiver = replace(replace(code, '{', '\\{'), '}', '\\}');
    tmp$.append_gw00v9$(tmp$_0 + Regex_init('_\\\\\\{(.*?)\\\\\\}').replace_x2uqeu$($receiver, '_{$1}') + '\\' + ']');
    this.builder.append_gw00v9$('<\/span>');
  };
  HtmlCodeWriter.prototype.writeId_uaa61e$ = function (id) {
    this.builder.append_gw00v9$("<span class='mathlingua-id'>");
    this.builder.append_s8itvh$(91);
    var stmt = id.toStatement().toCode_pc06dk$(false, 0, new MathLinguaCodeWriter(emptyList(), emptyList())).getCode();
    this.builder.append_gw00v9$(removeSurrounding(stmt, "'", "'"));
    this.builder.append_s8itvh$(93);
    this.builder.append_gw00v9$('<\/span>');
  };
  HtmlCodeWriter.prototype.writeText_61zpoe$ = function (text) {
    this.builder.append_gw00v9$("<span class='mathlingua-text'>");
    this.builder.append_s8itvh$(34);
    this.builder.append_gw00v9$(replace(text, '&', ''));
    this.builder.append_s8itvh$(34);
    this.builder.append_gw00v9$('<\/span>');
  };
  HtmlCodeWriter.prototype.writeStatement_ytmu5s$ = function (stmtText, root) {
    this.builder.append_gw00v9$("<span class='mathlingua-statement'>");
    var IS = 'is';
    if (contains_0(stmtText, IS)) {
      var index = indexOf(stmtText, IS);
      this.builder.append_gw00v9$('\\' + '[' + stmtText.substring(0, index) + '\\' + ']');
      this.writeSpace();
      this.writeDirect_61zpoe$("<span class='mathlingua-is'>is<\/span>");
      this.writeSpace();
      var startIndex = index + IS.length | 0;
      var $receiver = stmtText.substring(startIndex);
      var tmp$;
      var lhs = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
      var lhsParsed = newTexTalkParser().parse_2mg13h$(newTexTalkLexer(lhs));
      if (lhsParsed.errors.isEmpty()) {
        var patternsToWrittenAs = MathLingua_getInstance().getPatternsToWrittenAs_r44ck5$(this.defines, this.represents);
        this.builder.append_gw00v9$('\\' + '[' + expandAsWritten(lhsParsed.root, patternsToWrittenAs) + '\\' + ']');
      }
       else {
        this.writeDirect_61zpoe$(lhs);
      }
    }
     else {
      var tmp$_0 = Kotlin.isType(root, ValidationSuccess);
      if (tmp$_0) {
        var tmp$_1 = !this.defines.isEmpty();
        if (!tmp$_1) {
          tmp$_1 = !this.represents.isEmpty();
        }
        tmp$_0 = tmp$_1;
      }
      if (tmp$_0) {
        var patternsToWrittenAs_0 = MathLingua_getInstance().getPatternsToWrittenAs_r44ck5$(this.defines, this.represents);
        this.builder.append_gw00v9$('\\' + '[' + expandAsWritten(root.value, patternsToWrittenAs_0) + '\\' + ']');
      }
       else {
        this.builder.append_gw00v9$('\\' + '[' + stmtText + '\\' + ']');
      }
    }
    this.builder.append_gw00v9$('<\/span>');
  };
  HtmlCodeWriter.prototype.writeIdentifier_ivxn3r$ = function (name, isVarArgs) {
    this.builder.append_gw00v9$("<span class='mathlingua-identifier'>\\[");
    this.builder.append_gw00v9$(prettyPrintIdentifier(name));
    if (isVarArgs) {
      this.builder.append_gw00v9$('...');
    }
    this.builder.append_gw00v9$('\\]<\/span>');
  };
  HtmlCodeWriter.prototype.writeDirect_61zpoe$ = function (text) {
    this.builder.append_gw00v9$(text);
  };
  HtmlCodeWriter.prototype.beginTopLevel = function () {
    this.builder.append_gw00v9$("<span class='mathlingua-top-level'>");
  };
  HtmlCodeWriter.prototype.endTopLevel = function () {
    this.builder.append_gw00v9$('<\/span>');
  };
  HtmlCodeWriter.prototype.newCodeWriter_g8umse$ = function (defines) {
    return new HtmlCodeWriter(defines, this.represents);
  };
  HtmlCodeWriter.prototype.getCode = function () {
    var $receiver = this.builder.toString();
    var $receiver_0 = Regex_init('(\\s*<\\s*br\\s*/\\s*>\\s*)+$').replace_x2uqeu$($receiver, '');
    var text = Regex_init('^(\\s*<\\s*br\\s*/\\s*>\\s*)+$').replace_x2uqeu$($receiver_0, '');
    return "<span class='mathlingua'>" + text + '<\/span>';
  };
  HtmlCodeWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlCodeWriter',
    interfaces: [CodeWriter]
  };
  function MathLinguaCodeWriter(defines, represents) {
    this.defines = defines;
    this.represents = represents;
    this.builder_0 = StringBuilder_init();
  }
  MathLinguaCodeWriter.prototype.append_v8axul$ = function (node, hasDot, indent) {
    this.builder_0.append_gw00v9$(node.toCode_pc06dk$(hasDot, indent, this.newCodeWriter_g8umse$(this.defines)).getCode());
  };
  MathLinguaCodeWriter.prototype.writeHeader_61zpoe$ = function (header) {
    this.builder_0.append_gw00v9$(header);
    this.builder_0.append_s8itvh$(58);
  };
  MathLinguaCodeWriter.prototype.writeNewline_za3lpa$$default = function (count) {
    for (var i = 0; i < count; i++) {
      this.builder_0.append_s8itvh$(10);
    }
  };
  MathLinguaCodeWriter.prototype.writeSpace = function () {
    this.builder_0.append_s8itvh$(32);
  };
  MathLinguaCodeWriter.prototype.writeDot = function () {
    this.builder_0.append_s8itvh$(46);
  };
  MathLinguaCodeWriter.prototype.writeComma = function () {
    this.builder_0.append_s8itvh$(44);
  };
  MathLinguaCodeWriter.prototype.writeIndent_eltk6l$ = function (hasDot, indent) {
    var tmp$;
    tmp$ = indent - 2 | 0;
    for (var i = 0; i < tmp$; i++) {
      this.writeSpace();
    }
    if ((indent - 2 | 0) >= 0) {
      if (hasDot) {
        this.writeDot();
      }
       else {
        this.writeSpace();
      }
    }
    if ((indent - 1 | 0) >= 0) {
      this.writeSpace();
    }
  };
  MathLinguaCodeWriter.prototype.writePhase1Node_baevx2$ = function (phase1Node) {
    this.builder_0.append_gw00v9$(phase1Node.toCode());
  };
  MathLinguaCodeWriter.prototype.writeId_uaa61e$ = function (id) {
    this.builder_0.append_s8itvh$(91);
    var stmt = id.toStatement().toCode_pc06dk$(false, 0, this.newCodeWriter_g8umse$(emptyList())).getCode();
    this.builder_0.append_gw00v9$(removeSurrounding(stmt, "'", "'"));
    this.builder_0.append_s8itvh$(93);
  };
  MathLinguaCodeWriter.prototype.writeText_61zpoe$ = function (text) {
    this.builder_0.append_s8itvh$(34);
    this.builder_0.append_gw00v9$(text);
    this.builder_0.append_s8itvh$(34);
  };
  MathLinguaCodeWriter.prototype.writeStatement_ytmu5s$ = function (stmtText, root) {
    var tmp$ = Kotlin.isType(root, ValidationSuccess);
    if (tmp$) {
      var tmp$_0 = !this.defines.isEmpty();
      if (!tmp$_0) {
        tmp$_0 = !this.represents.isEmpty();
      }
      tmp$ = tmp$_0;
    }
    if (tmp$) {
      var patternsToWrittenAs = MathLingua_getInstance().getPatternsToWrittenAs_r44ck5$(this.defines, this.represents);
      this.builder_0.append_gw00v9$("'" + expandAsWritten(root.value, patternsToWrittenAs) + "'");
    }
     else {
      this.builder_0.append_gw00v9$("'" + stmtText + "'");
    }
  };
  MathLinguaCodeWriter.prototype.writeIdentifier_ivxn3r$ = function (name, isVarArgs) {
    this.builder_0.append_gw00v9$(name);
    if (isVarArgs) {
      this.builder_0.append_gw00v9$('...');
    }
  };
  MathLinguaCodeWriter.prototype.writeDirect_61zpoe$ = function (text) {
    this.builder_0.append_gw00v9$(text);
  };
  MathLinguaCodeWriter.prototype.beginTopLevel = function () {
  };
  MathLinguaCodeWriter.prototype.endTopLevel = function () {
  };
  MathLinguaCodeWriter.prototype.newCodeWriter_g8umse$ = function (defines) {
    return new MathLinguaCodeWriter(defines, this.represents);
  };
  MathLinguaCodeWriter.prototype.getCode = function () {
    return this.builder_0.toString();
  };
  MathLinguaCodeWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MathLinguaCodeWriter',
    interfaces: [CodeWriter]
  };
  function prettyPrintIdentifier(text) {
    var tmp$, tmp$_0;
    var regex = Regex_init('([a-zA-Z]+)([0-9]+)');
    var match = regex.find_905azu$(text);
    if (match != null) {
      var groups = match.groupValues;
      if (isGreekLetter(groups.get_za3lpa$(1))) {
        tmp$ = '\\' + groups.get_za3lpa$(1);
      }
       else {
        tmp$ = groups.get_za3lpa$(1);
      }
      var name = tmp$;
      var number = groups.get_za3lpa$(2);
      tmp$_0 = name + '_' + number;
    }
     else {
      if (isGreekLetter(text)) {
        tmp$_0 = '\\' + text;
      }
       else {
        tmp$_0 = text;
      }
    }
    return tmp$_0;
  }
  function isGreekLetter(letter) {
    return mutableSetOf(['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega']).contains_11rb$(letter);
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function getChalkTalkAncestry(root, node) {
    var path = ArrayList_init();
    getChalkTalkAncestryImpl(root, node, path);
    if (!path.isEmpty()) {
      path.removeAt_za3lpa$(path.size - 1 | 0);
    }
    return reversed(path);
  }
  function getChalkTalkAncestryImpl$lambda(closure$path, closure$node) {
    return function (it) {
      if (closure$path.isEmpty() || !equals(last(closure$path), closure$node)) {
        getChalkTalkAncestryImpl(it, closure$node, closure$path);
      }
      return Unit;
    };
  }
  function getChalkTalkAncestryImpl(root, node, path) {
    if (equals(root, node)) {
      path.add_11rb$(node);
      return;
    }
    path.add_11rb$(root);
    root.forEach_s8izwl$(getChalkTalkAncestryImpl$lambda(path, node));
    if (path.isEmpty() || !equals(last(path), node)) {
      path.removeAt_za3lpa$(path.size - 1 | 0);
    }
  }
  function findNode$lambda(closure$tracker) {
    return function (it) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = closure$tracker.getLocationOf_2v05ti$(it)) != null ? tmp$.column : null) != null ? tmp$_0 : -1;
    };
  }
  function findNode(tracker, node, row, col) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (row < 0 || col < 0) {
      throw IllegalArgumentException_init('Row and column must be non-negative ' + ('but found row=' + row + ', column=' + col));
    }
    var nodesAtRow = LinkedHashSet_init();
    findNodesAtRow(tracker, node, row, nodesAtRow);
    if (nodesAtRow.isEmpty()) {
      if (row === 0) {
        tmp$ = node;
      }
       else {
        tmp$ = findNode(tracker, node, row - 1 | 0, col);
      }
      return tmp$;
    }
    var sortedByCol = sortedWith(toList(nodesAtRow), new Comparator$ObjectLiteral(compareBy$lambda(findNode$lambda(tracker))));
    var prev = first(sortedByCol);
    tmp$_0 = sortedByCol.iterator();
    while (tmp$_0.hasNext()) {
      var n = tmp$_0.next();
      if (((tmp$_2 = (tmp$_1 = tracker.getLocationOf_2v05ti$(n)) != null ? tmp$_1.column : null) != null ? tmp$_2 : -1) > col) {
        return prev;
      }
      prev = n;
    }
    return prev;
  }
  function findNodesAtRow$lambda(closure$tracker, closure$row, closure$result) {
    return function (it) {
      findNodesAtRow(closure$tracker, it, closure$row, closure$result);
      return Unit;
    };
  }
  function findNodesAtRow(tracker, node, row, result) {
    var location = tracker.getLocationOf_2v05ti$(node);
    if (location != null && location.row === row) {
      result.add_11rb$(node);
    }
    node.forEach_s8izwl$(findNodesAtRow$lambda(tracker, row, result));
  }
  function hasChild$lambda(closure$found, closure$child) {
    return function (it) {
      if (!closure$found.v) {
        closure$found.v = hasChild(it, closure$child);
      }
      return Unit;
    };
  }
  function hasChild(node, child) {
    if (equals(node, child)) {
      return true;
    }
    var found = {v: false};
    node.forEach_s8izwl$(hasChild$lambda(found, child));
    return found.v;
  }
  function Document(defines, represents, theorems, axioms, conjectures, resources, protoGroups) {
    this.defines = defines;
    this.represents = represents;
    this.theorems = theorems;
    this.axioms = axioms;
    this.conjectures = conjectures;
    this.resources = resources;
    this.protoGroups = protoGroups;
  }
  Document.prototype.all = function () {
    var result = ArrayList_init();
    result.addAll_brywnq$(this.defines);
    result.addAll_brywnq$(this.represents);
    result.addAll_brywnq$(this.theorems);
    result.addAll_brywnq$(this.axioms);
    result.addAll_brywnq$(this.conjectures);
    result.addAll_brywnq$(this.resources);
    result.addAll_brywnq$(this.protoGroups);
    return result;
  };
  Document.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.defines.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
    var tmp$_0;
    tmp$_0 = this.represents.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      fn(element_0);
    }
    var tmp$_1;
    tmp$_1 = this.theorems.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      fn(element_1);
    }
    var tmp$_2;
    tmp$_2 = this.axioms.iterator();
    while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      fn(element_2);
    }
    var tmp$_3;
    tmp$_3 = this.conjectures.iterator();
    while (tmp$_3.hasNext()) {
      var element_3 = tmp$_3.next();
      fn(element_3);
    }
    var tmp$_4;
    tmp$_4 = this.resources.iterator();
    while (tmp$_4.hasNext()) {
      var element_4 = tmp$_4.next();
      fn(element_4);
    }
    var tmp$_5;
    tmp$_5 = this.protoGroups.iterator();
    while (tmp$_5.hasNext()) {
      var element_5 = tmp$_5.next();
      fn(element_5);
    }
  };
  Document.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = this.defines.iterator();
    while (tmp$.hasNext()) {
      var grp = tmp$.next();
      writer.append_v8axul$(grp, false, 0);
      writer.writeNewline_za3lpa$(3);
    }
    tmp$_0 = this.represents.iterator();
    while (tmp$_0.hasNext()) {
      var grp_0 = tmp$_0.next();
      writer.append_v8axul$(grp_0, false, 0);
      writer.writeNewline_za3lpa$(3);
    }
    tmp$_1 = this.axioms.iterator();
    while (tmp$_1.hasNext()) {
      var grp_1 = tmp$_1.next();
      writer.append_v8axul$(grp_1, false, 0);
      writer.writeNewline_za3lpa$(3);
    }
    tmp$_2 = this.conjectures.iterator();
    while (tmp$_2.hasNext()) {
      var grp_2 = tmp$_2.next();
      writer.append_v8axul$(grp_2, false, 0);
      writer.writeNewline_za3lpa$(3);
    }
    tmp$_3 = this.theorems.iterator();
    while (tmp$_3.hasNext()) {
      var grp_3 = tmp$_3.next();
      writer.append_v8axul$(grp_3, false, 0);
      writer.writeNewline_za3lpa$(3);
    }
    tmp$_4 = this.protoGroups.iterator();
    while (tmp$_4.hasNext()) {
      var grp_4 = tmp$_4.next();
      writer.append_v8axul$(grp_4, false, 0);
      writer.writeNewline_za3lpa$(3);
    }
    tmp$_5 = this.resources.iterator();
    while (tmp$_5.hasNext()) {
      var src = tmp$_5.next();
      writer.append_v8axul$(src, false, 0);
      writer.writeNewline_za3lpa$(3);
    }
    return writer;
  };
  Document.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.defines;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), DefinesGroup) ? tmp$_0 : throwCCE());
    }
    var $receiver_0 = this.axioms;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2;
      destination_0.add_11rb$(Kotlin.isType(tmp$_2 = item_0.transform_ql661s$(chalkTransformer), AxiomGroup) ? tmp$_2 : throwCCE());
    }
    var $receiver_1 = this.conjectures;
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_3;
    tmp$_3 = $receiver_1.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      var tmp$_4;
      destination_1.add_11rb$(Kotlin.isType(tmp$_4 = item_1.transform_ql661s$(chalkTransformer), ConjectureGroup) ? tmp$_4 : throwCCE());
    }
    var $receiver_2 = this.represents;
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_5;
    tmp$_5 = $receiver_2.iterator();
    while (tmp$_5.hasNext()) {
      var item_2 = tmp$_5.next();
      var tmp$_6;
      destination_2.add_11rb$(Kotlin.isType(tmp$_6 = item_2.transform_ql661s$(chalkTransformer), RepresentsGroup) ? tmp$_6 : throwCCE());
    }
    var $receiver_3 = this.theorems;
    var destination_3 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_7;
    tmp$_7 = $receiver_3.iterator();
    while (tmp$_7.hasNext()) {
      var item_3 = tmp$_7.next();
      var tmp$_8;
      destination_3.add_11rb$(Kotlin.isType(tmp$_8 = item_3.transform_ql661s$(chalkTransformer), TheoremGroup) ? tmp$_8 : throwCCE());
    }
    var $receiver_4 = this.resources;
    var destination_4 = ArrayList_init_0(collectionSizeOrDefault($receiver_4, 10));
    var tmp$_9;
    tmp$_9 = $receiver_4.iterator();
    while (tmp$_9.hasNext()) {
      var item_4 = tmp$_9.next();
      var tmp$_10;
      destination_4.add_11rb$(Kotlin.isType(tmp$_10 = item_4.transform_ql661s$(chalkTransformer), ResourceGroup) ? tmp$_10 : throwCCE());
    }
    var $receiver_5 = this.protoGroups;
    var destination_5 = ArrayList_init_0(collectionSizeOrDefault($receiver_5, 10));
    var tmp$_11;
    tmp$_11 = $receiver_5.iterator();
    while (tmp$_11.hasNext()) {
      var item_5 = tmp$_11.next();
      var tmp$_12;
      destination_5.add_11rb$(Kotlin.isType(tmp$_12 = item_5.transform_ql661s$(chalkTransformer), ProtoGroup) ? tmp$_12 : throwCCE());
    }
    return chalkTransformer(new Document(destination, destination_2, destination_3, destination_0, destination_1, destination_4, destination_5));
  };
  Document.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Document',
    interfaces: [Phase2Node]
  };
  Document.prototype.component1 = function () {
    return this.defines;
  };
  Document.prototype.component2 = function () {
    return this.represents;
  };
  Document.prototype.component3 = function () {
    return this.theorems;
  };
  Document.prototype.component4 = function () {
    return this.axioms;
  };
  Document.prototype.component5 = function () {
    return this.conjectures;
  };
  Document.prototype.component6 = function () {
    return this.resources;
  };
  Document.prototype.component7 = function () {
    return this.protoGroups;
  };
  Document.prototype.copy_5elj19$ = function (defines, represents, theorems, axioms, conjectures, resources, protoGroups) {
    return new Document(defines === void 0 ? this.defines : defines, represents === void 0 ? this.represents : represents, theorems === void 0 ? this.theorems : theorems, axioms === void 0 ? this.axioms : axioms, conjectures === void 0 ? this.conjectures : conjectures, resources === void 0 ? this.resources : resources, protoGroups === void 0 ? this.protoGroups : protoGroups);
  };
  Document.prototype.toString = function () {
    return 'Document(defines=' + Kotlin.toString(this.defines) + (', represents=' + Kotlin.toString(this.represents)) + (', theorems=' + Kotlin.toString(this.theorems)) + (', axioms=' + Kotlin.toString(this.axioms)) + (', conjectures=' + Kotlin.toString(this.conjectures)) + (', resources=' + Kotlin.toString(this.resources)) + (', protoGroups=' + Kotlin.toString(this.protoGroups)) + ')';
  };
  Document.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.defines) | 0;
    result = result * 31 + Kotlin.hashCode(this.represents) | 0;
    result = result * 31 + Kotlin.hashCode(this.theorems) | 0;
    result = result * 31 + Kotlin.hashCode(this.axioms) | 0;
    result = result * 31 + Kotlin.hashCode(this.conjectures) | 0;
    result = result * 31 + Kotlin.hashCode(this.resources) | 0;
    result = result * 31 + Kotlin.hashCode(this.protoGroups) | 0;
    return result;
  };
  Document.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.defines, other.defines) && Kotlin.equals(this.represents, other.represents) && Kotlin.equals(this.theorems, other.theorems) && Kotlin.equals(this.axioms, other.axioms) && Kotlin.equals(this.conjectures, other.conjectures) && Kotlin.equals(this.resources, other.resources) && Kotlin.equals(this.protoGroups, other.protoGroups)))));
  };
  function validateDocument(rawNode, tracker) {
    var tmp$, tmp$_0;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Root)) {
      errors.add_11rb$(new ParseError('Expected a Root', getRow(node), getColumn(node)));
      return validationFailure(errors);
    }
    var defines = ArrayList_init();
    var represents = ArrayList_init();
    var theorems = ArrayList_init();
    var axioms = ArrayList_init();
    var conjectures = ArrayList_init();
    var protoGroups = ArrayList_init();
    var resources = ArrayList_init();
    var groups = node.component1();
    tmp$ = groups.iterator();
    while (tmp$.hasNext()) {
      var group = tmp$.next();
      if (isTheoremGroup(group)) {
        var resultValidation = validateTheoremGroup(group, tracker);
        if (Kotlin.isType(resultValidation, ValidationSuccess))
          theorems.add_11rb$(resultValidation.value);
        else if (Kotlin.isType(resultValidation, ValidationFailure))
          errors.addAll_brywnq$(resultValidation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (isTheoremGroup(group)) {
        var resultValidation_0 = validateTheoremGroup(group, tracker);
        if (Kotlin.isType(resultValidation_0, ValidationSuccess))
          theorems.add_11rb$(resultValidation_0.value);
        else if (Kotlin.isType(resultValidation_0, ValidationFailure))
          errors.addAll_brywnq$(resultValidation_0.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (isAxiomGroup(group)) {
        var axiomValidation = validateAxiomGroup(group, tracker);
        if (Kotlin.isType(axiomValidation, ValidationSuccess))
          axioms.add_11rb$(axiomValidation.value);
        else if (Kotlin.isType(axiomValidation, ValidationFailure))
          errors.addAll_brywnq$(axiomValidation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (isConjectureGroup(group)) {
        var conjectureValidation = validateConjectureGroup(group, tracker);
        if (Kotlin.isType(conjectureValidation, ValidationSuccess))
          conjectures.add_11rb$(conjectureValidation.value);
        else if (Kotlin.isType(conjectureValidation, ValidationFailure))
          errors.addAll_brywnq$(conjectureValidation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (isDefinesGroup(group)) {
        var definesValidation = validateDefinesGroup(group, tracker);
        if (Kotlin.isType(definesValidation, ValidationSuccess))
          defines.add_11rb$(definesValidation.value);
        else if (Kotlin.isType(definesValidation, ValidationFailure))
          errors.addAll_brywnq$(definesValidation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (isRepresentsGroup(group)) {
        var representsValidation = validateRepresentsGroup(group, tracker);
        if (Kotlin.isType(representsValidation, ValidationSuccess))
          represents.add_11rb$(representsValidation.value);
        else if (Kotlin.isType(representsValidation, ValidationFailure))
          errors.addAll_brywnq$(representsValidation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (isResourceGroup(group)) {
        var resourceValidation = validateResourceGroup(group, tracker);
        if (Kotlin.isType(resourceValidation, ValidationSuccess))
          resources.add_11rb$(resourceValidation.value);
        else if (Kotlin.isType(resourceValidation, ValidationFailure))
          errors.addAll_brywnq$(resourceValidation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (firstSectionMatchesName(group, 'ProtoDefines')) {
        var validation = validateProtoGroup(group, 'ProtoDefines', tracker);
        if (Kotlin.isType(validation, ValidationSuccess))
          protoGroups.add_11rb$(validation.value);
        else if (Kotlin.isType(validation, ValidationFailure))
          errors.addAll_brywnq$(validation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (firstSectionMatchesName(group, 'ProtoResult')) {
        var validation_0 = validateProtoGroup(group, 'ProtoResult', tracker);
        if (Kotlin.isType(validation_0, ValidationSuccess))
          protoGroups.add_11rb$(validation_0.value);
        else if (Kotlin.isType(validation_0, ValidationFailure))
          errors.addAll_brywnq$(validation_0.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (firstSectionMatchesName(group, 'ProtoTheorem')) {
        var validation_1 = validateProtoGroup(group, 'ProtoTheorem', tracker);
        if (Kotlin.isType(validation_1, ValidationSuccess))
          protoGroups.add_11rb$(validation_1.value);
        else if (Kotlin.isType(validation_1, ValidationFailure))
          errors.addAll_brywnq$(validation_1.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (firstSectionMatchesName(group, 'ProtoAxiom')) {
        var validation_2 = validateProtoGroup(group, 'ProtoAxiom', tracker);
        if (Kotlin.isType(validation_2, ValidationSuccess))
          protoGroups.add_11rb$(validation_2.value);
        else if (Kotlin.isType(validation_2, ValidationFailure))
          errors.addAll_brywnq$(validation_2.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (firstSectionMatchesName(group, 'ProtoConjecture')) {
        var validation_3 = validateProtoGroup(group, 'ProtoConjecture', tracker);
        if (Kotlin.isType(validation_3, ValidationSuccess))
          protoGroups.add_11rb$(validation_3.value);
        else if (Kotlin.isType(validation_3, ValidationFailure))
          errors.addAll_brywnq$(validation_3.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (firstSectionMatchesName(group, 'ProtoNotes')) {
        var validation_4 = validateProtoGroup(group, 'ProtoNotes', tracker);
        if (Kotlin.isType(validation_4, ValidationSuccess))
          protoGroups.add_11rb$(validation_4.value);
        else if (Kotlin.isType(validation_4, ValidationFailure))
          errors.addAll_brywnq$(validation_4.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (firstSectionMatchesName(group, 'ProtoExample')) {
        var validation_5 = validateProtoGroup(group, 'ProtoExample', tracker);
        if (Kotlin.isType(validation_5, ValidationSuccess))
          protoGroups.add_11rb$(validation_5.value);
        else if (Kotlin.isType(validation_5, ValidationFailure))
          errors.addAll_brywnq$(validation_5.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (firstSectionMatchesName(group, 'ProtoProblem')) {
        var validation_6 = validateProtoGroup(group, 'ProtoProblem', tracker);
        if (Kotlin.isType(validation_6, ValidationSuccess))
          protoGroups.add_11rb$(validation_6.value);
        else if (Kotlin.isType(validation_6, ValidationFailure))
          errors.addAll_brywnq$(validation_6.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else {
        errors.add_11rb$(new ParseError('Expected a top level group but found ' + group.toCode(), getRow(group), getColumn(group)));
      }
    }
    if (!errors.isEmpty()) {
      tmp$_0 = validationFailure(errors);
    }
     else
      tmp$_0 = validationSuccess_0(tracker, rawNode, new Document(defines, represents, theorems, axioms, conjectures, resources, protoGroups));
    return tmp$_0;
  }
  function Phase2Node() {
  }
  Phase2Node.prototype.toCode_pc06dk$ = function (isArg, indent, writer, callback$default) {
    if (writer === void 0)
      writer = new MathLinguaCodeWriter(emptyList(), emptyList());
    return callback$default ? callback$default(isArg, indent, writer) : this.toCode_pc06dk$$default(isArg, indent, writer);
  };
  Phase2Node.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Phase2Node',
    interfaces: []
  };
  function AbstractionNode(abstraction) {
    this.abstraction = abstraction;
  }
  AbstractionNode.prototype.forEach_s8izwl$ = function (fn) {
  };
  AbstractionNode.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode(writer, isArg, indent, this.abstraction);
  };
  AbstractionNode.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  AbstractionNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractionNode',
    interfaces: [Target]
  };
  AbstractionNode.prototype.component1 = function () {
    return this.abstraction;
  };
  AbstractionNode.prototype.copy_mnh2mg$ = function (abstraction) {
    return new AbstractionNode(abstraction === void 0 ? this.abstraction : abstraction);
  };
  AbstractionNode.prototype.toString = function () {
    return 'AbstractionNode(abstraction=' + Kotlin.toString(this.abstraction) + ')';
  };
  AbstractionNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.abstraction) | 0;
    return result;
  };
  AbstractionNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.abstraction, other.abstraction))));
  };
  function isAbstraction(node) {
    return Kotlin.isType(node, Abstraction);
  }
  function validateAbstractionNode$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = it, Abstraction) ? tmp$ : null;
  }
  function validateAbstractionNode(node, tracker) {
    return validateWrappedNode(tracker, node, 'AbstractionNode', validateAbstractionNode$lambda, getCallableRef('AbstractionNode', function (abstraction) {
      return new AbstractionNode(abstraction);
    }));
  }
  function AssignmentNode(assignment) {
    this.assignment = assignment;
  }
  AssignmentNode.prototype.forEach_s8izwl$ = function (fn) {
  };
  AssignmentNode.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode(writer, isArg, indent, this.assignment);
  };
  AssignmentNode.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  AssignmentNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssignmentNode',
    interfaces: [Target]
  };
  AssignmentNode.prototype.component1 = function () {
    return this.assignment;
  };
  AssignmentNode.prototype.copy_y4i2ej$ = function (assignment) {
    return new AssignmentNode(assignment === void 0 ? this.assignment : assignment);
  };
  AssignmentNode.prototype.toString = function () {
    return 'AssignmentNode(assignment=' + Kotlin.toString(this.assignment) + ')';
  };
  AssignmentNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.assignment) | 0;
    return result;
  };
  AssignmentNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.assignment, other.assignment))));
  };
  function isAssignment(node) {
    return Kotlin.isType(node, Assignment);
  }
  function validateAssignmentNode$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = it, Assignment) ? tmp$ : null;
  }
  function validateAssignmentNode(node, tracker) {
    return validateWrappedNode(tracker, node, 'AssignmentNode', validateAssignmentNode$lambda, getCallableRef('AssignmentNode', function (assignment) {
      return new AssignmentNode(assignment);
    }));
  }
  function ValidationPair(matches, validate) {
    this.matches = matches;
    this.validate = validate;
  }
  ValidationPair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValidationPair',
    interfaces: []
  };
  ValidationPair.prototype.component1 = function () {
    return this.matches;
  };
  ValidationPair.prototype.component2 = function () {
    return this.validate;
  };
  ValidationPair.prototype.copy_ycokfn$ = function (matches, validate) {
    return new ValidationPair(matches === void 0 ? this.matches : matches, validate === void 0 ? this.validate : validate);
  };
  ValidationPair.prototype.toString = function () {
    return 'ValidationPair(matches=' + Kotlin.toString(this.matches) + (', validate=' + Kotlin.toString(this.validate)) + ')';
  };
  ValidationPair.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.matches) | 0;
    result = result * 31 + Kotlin.hashCode(this.validate) | 0;
    return result;
  };
  ValidationPair.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.matches, other.matches) && Kotlin.equals(this.validate, other.validate)))));
  };
  function Clause() {
  }
  Clause.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Clause',
    interfaces: [Phase2Node]
  };
  function Target() {
  }
  Target.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Target',
    interfaces: [Clause]
  };
  var CLAUSE_VALIDATORS;
  function validateClause(rawNode, tracker) {
    var tmp$, tmp$_0;
    var node = rawNode.resolve();
    tmp$ = CLAUSE_VALIDATORS.iterator();
    while (tmp$.hasNext()) {
      var pair = tmp$.next();
      if (pair.matches(node)) {
        var validation = pair.validate(node, tracker);
        if (Kotlin.isType(validation, ValidationSuccess))
          tmp$_0 = validationSuccess_0(tracker, rawNode, validation.value);
        else if (Kotlin.isType(validation, ValidationFailure))
          tmp$_0 = validationFailure(validation.errors);
        else
          tmp$_0 = Kotlin.noWhenBranchMatched();
        return tmp$_0;
      }
    }
    return validationFailure(listOf(new ParseError('Expected a Target', getRow(node), getColumn(node))));
  }
  function firstSectionMatchesName(node, name) {
    var tmp$;
    if (!Kotlin.isType(node, Group)) {
      return false;
    }
    var sections = node.component1();
    if (sections.isEmpty()) {
      tmp$ = false;
    }
     else
      tmp$ = equals(sections.get_za3lpa$(0).name.text, name);
    return tmp$;
  }
  function validateSingleSectionGroup(tracker, rawNode, sectionName, buildGroup, validateSection) {
    var tmp$;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Group)) {
      errors.add_11rb$(new ParseError('Expected a Group', getRow(node), getColumn(node)));
      return validationFailure(errors);
    }
    var sections = node.component1();
    var sectionMap;
    try {
      sectionMap = identifySections(sections, [sectionName]);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var section = null;
    var sect = sectionMap.get_11rb$(sectionName);
    var validation = validateSection(ensureNotNull(sect).get_za3lpa$(0), tracker);
    if (Kotlin.isType(validation, ValidationSuccess))
      section = validation.value;
    else if (Kotlin.isType(validation, ValidationFailure))
      errors.addAll_brywnq$(validation.errors);
    else
      Kotlin.noWhenBranchMatched();
    if (!errors.isEmpty()) {
      tmp$ = validationFailure(errors);
    }
     else
      tmp$ = validationSuccess_0(tracker, rawNode, buildGroup(ensureNotNull(section)));
    return tmp$;
  }
  function validateDoubleSectionGroup(tracker, rawNode, section1Name, validateSection1, section2Name, validateSection2, buildGroup) {
    var tmp$;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Group)) {
      errors.add_11rb$(new ParseError('Expected a Group', getRow(node), getColumn(node)));
      return validationFailure(errors);
    }
    var sections = node.component1();
    var sectionMap;
    try {
      sectionMap = identifySections(sections, [section1Name, section2Name]);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var section1 = null;
    var sect1 = sectionMap.get_11rb$(section1Name);
    var section1Validation = validateSection1(ensureNotNull(sect1).get_za3lpa$(0), tracker);
    if (Kotlin.isType(section1Validation, ValidationSuccess))
      section1 = section1Validation.value;
    else if (Kotlin.isType(section1Validation, ValidationFailure))
      errors.addAll_brywnq$(section1Validation.errors);
    else
      Kotlin.noWhenBranchMatched();
    var section2 = null;
    var sect2 = sectionMap.get_11rb$(section2Name);
    var section2Validation = validateSection2(ensureNotNull(sect2).get_za3lpa$(0), tracker);
    if (Kotlin.isType(section2Validation, ValidationSuccess))
      section2 = section2Validation.value;
    else if (Kotlin.isType(section2Validation, ValidationFailure))
      errors.addAll_brywnq$(section2Validation.errors);
    else
      Kotlin.noWhenBranchMatched();
    if (!errors.isEmpty()) {
      tmp$ = validationFailure(errors);
    }
     else
      tmp$ = validationSuccess_0(tracker, rawNode, buildGroup(ensureNotNull(section1), ensureNotNull(section2)));
    return tmp$;
  }
  function validateWrappedNode(tracker, rawNode, expectedType, checkType, build) {
    var node = rawNode.resolve();
    var base = checkType(node);
    if (base == null) {
      return validationFailure(listOf(new ParseError('Cannot convert ' + node.toCode() + ' to a ' + expectedType, getRow(node), getColumn(node))));
    }
    return validationSuccess_0(tracker, rawNode, build(base));
  }
  function toCode(writer, isArg, indent, phase1Node) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writePhase1Node_baevx2$(phase1Node);
    return writer;
  }
  function toCode_0(writer, isArg, indent, sections) {
    for (var i = 0; i !== sections.length; ++i) {
      var sect = sections[i];
      if (sect != null) {
        writer.append_v8axul$(sect, isArg && i === 0, indent);
        if (i !== (sections.length - 1 | 0)) {
          writer.writeNewline_za3lpa$();
        }
      }
    }
    return writer;
  }
  function ClauseListNode(clauses) {
    this.clauses = clauses;
  }
  ClauseListNode.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.clauses.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  ClauseListNode.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var tmp$;
    tmp$ = this.clauses;
    for (var i = 0; i !== tmp$.size; ++i) {
      writer.append_v8axul$(this.clauses.get_za3lpa$(i), true, indent);
      if (i !== (this.clauses.size - 1 | 0)) {
        writer.writeNewline_za3lpa$();
      }
    }
    return writer;
  };
  ClauseListNode.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.clauses;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), Clause) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new ClauseListNode(destination));
  };
  ClauseListNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClauseListNode',
    interfaces: [Phase2Node]
  };
  ClauseListNode.prototype.component1 = function () {
    return this.clauses;
  };
  ClauseListNode.prototype.copy_k58tlm$ = function (clauses) {
    return new ClauseListNode(clauses === void 0 ? this.clauses : clauses);
  };
  ClauseListNode.prototype.toString = function () {
    return 'ClauseListNode(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  ClauseListNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  ClauseListNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function ClauseListSection(name, clauses) {
    this.name = name;
    this.clauses = clauses;
  }
  ClauseListSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClauseListSection',
    interfaces: []
  };
  ClauseListSection.prototype.component1 = function () {
    return this.name;
  };
  ClauseListSection.prototype.component2 = function () {
    return this.clauses;
  };
  ClauseListSection.prototype.copy_c45188$ = function (name, clauses) {
    return new ClauseListSection(name === void 0 ? this.name : name, clauses === void 0 ? this.clauses : clauses);
  };
  ClauseListSection.prototype.toString = function () {
    return 'ClauseListSection(name=' + Kotlin.toString(this.name) + (', clauses=' + Kotlin.toString(this.clauses)) + ')';
  };
  ClauseListSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  ClauseListSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.clauses, other.clauses)))));
  };
  function validateClauseList(tracker, rawNode, expectedName, canBeEmpty, builder) {
    var tmp$;
    var node = rawNode.resolve();
    var validation = validate(node, expectedName, canBeEmpty, tracker);
    if (Kotlin.isType(validation, ValidationSuccess))
      tmp$ = validationSuccess_0(tracker, rawNode, builder(new ClauseListNode(validation.value.clauses)));
    else if (Kotlin.isType(validation, ValidationFailure))
      tmp$ = validationFailure(validation.errors);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  }
  function validate(node, expectedName, canBeEmpty, tracker) {
    var tmp$, tmp$_0, tmp$_1;
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Section)) {
      errors.add_11rb$(new ParseError('Expected a Section', getRow(node), getColumn(node)));
    }
    var tmp$_2 = Kotlin.isType(tmp$ = node, Section) ? tmp$ : throwCCE();
    var name = tmp$_2.component1()
    , args = tmp$_2.component2();
    if (!equals(name.text, expectedName)) {
      errors.add_11rb$(new ParseError('Expected a Section with name ' + expectedName + ' but found ' + name.text, getRow(node), getColumn(node)));
    }
    if (args.isEmpty() && !canBeEmpty) {
      errors.add_11rb$(new ParseError("Section '" + name.text + "' requires at least one argument.", getRow(node), getColumn(node)));
    }
    var clauses = ArrayList_init();
    tmp$_0 = args.iterator();
    while (tmp$_0.hasNext()) {
      var arg = tmp$_0.next();
      var validation = validateClause(arg, tracker);
      if (Kotlin.isType(validation, ValidationSuccess))
        clauses.add_11rb$(validation.value);
      else if (Kotlin.isType(validation, ValidationFailure))
        errors.addAll_brywnq$(validation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    if (!errors.isEmpty()) {
      tmp$_1 = validationFailure(errors);
    }
     else
      tmp$_1 = validationSuccess(new ClauseListSection(name.text, clauses));
    return tmp$_1;
  }
  function ExistsGroup(existsSection, suchThatSection) {
    this.existsSection = existsSection;
    this.suchThatSection = suchThatSection;
  }
  ExistsGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.existsSection);
    fn(this.suchThatSection);
  };
  ExistsGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode_0(writer, isArg, indent, [this.existsSection, this.suchThatSection]);
  };
  ExistsGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0;
    return chalkTransformer(new ExistsGroup(Kotlin.isType(tmp$ = this.existsSection.transform_ql661s$(chalkTransformer), ExistsSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.suchThatSection.transform_ql661s$(chalkTransformer), SuchThatSection) ? tmp$_0 : throwCCE()));
  };
  ExistsGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExistsGroup',
    interfaces: [Clause]
  };
  ExistsGroup.prototype.component1 = function () {
    return this.existsSection;
  };
  ExistsGroup.prototype.component2 = function () {
    return this.suchThatSection;
  };
  ExistsGroup.prototype.copy_u8c5p6$ = function (existsSection, suchThatSection) {
    return new ExistsGroup(existsSection === void 0 ? this.existsSection : existsSection, suchThatSection === void 0 ? this.suchThatSection : suchThatSection);
  };
  ExistsGroup.prototype.toString = function () {
    return 'ExistsGroup(existsSection=' + Kotlin.toString(this.existsSection) + (', suchThatSection=' + Kotlin.toString(this.suchThatSection)) + ')';
  };
  ExistsGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.existsSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.suchThatSection) | 0;
    return result;
  };
  ExistsGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.existsSection, other.existsSection) && Kotlin.equals(this.suchThatSection, other.suchThatSection)))));
  };
  function isExistsGroup(node) {
    return firstSectionMatchesName(node, 'exists');
  }
  function validateExistsGroup(node, tracker) {
    return validateDoubleSectionGroup(tracker, node, 'exists', getCallableRef('validateExistsSection', function (node, tracker) {
      return validateExistsSection(node, tracker);
    }), 'suchThat', getCallableRef('validateSuchThatSection', function (node, tracker) {
      return validateSuchThatSection(node, tracker);
    }), getCallableRef('ExistsGroup', function (existsSection, suchThatSection) {
      return new ExistsGroup(existsSection, suchThatSection);
    }));
  }
  function ExpandsGroup(expandsSection, asSection) {
    this.expandsSection = expandsSection;
    this.asSection = asSection;
  }
  ExpandsGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.expandsSection);
    fn(this.asSection);
  };
  ExpandsGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode_0(writer, isArg, indent, [this.expandsSection, this.asSection]);
  };
  ExpandsGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0;
    return chalkTransformer(new ExpandsGroup(Kotlin.isType(tmp$ = this.expandsSection.transform_ql661s$(chalkTransformer), ExpandsSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.asSection.transform_ql661s$(chalkTransformer), AsSection) ? tmp$_0 : throwCCE()));
  };
  ExpandsGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpandsGroup',
    interfaces: [Clause]
  };
  ExpandsGroup.prototype.component1 = function () {
    return this.expandsSection;
  };
  ExpandsGroup.prototype.component2 = function () {
    return this.asSection;
  };
  ExpandsGroup.prototype.copy_l5i7c7$ = function (expandsSection, asSection) {
    return new ExpandsGroup(expandsSection === void 0 ? this.expandsSection : expandsSection, asSection === void 0 ? this.asSection : asSection);
  };
  ExpandsGroup.prototype.toString = function () {
    return 'ExpandsGroup(expandsSection=' + Kotlin.toString(this.expandsSection) + (', asSection=' + Kotlin.toString(this.asSection)) + ')';
  };
  ExpandsGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expandsSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.asSection) | 0;
    return result;
  };
  ExpandsGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expandsSection, other.expandsSection) && Kotlin.equals(this.asSection, other.asSection)))));
  };
  function isExpandsGroup(node) {
    return firstSectionMatchesName(node, 'expands');
  }
  function validateExpandsGroup(rawNode, tracker) {
    var tmp$;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Group)) {
      errors.add_11rb$(new ParseError('Expected a Group', getRow(node), getColumn(node)));
      return validationFailure(errors);
    }
    var sections = node.component1();
    var sectionMap;
    try {
      sectionMap = identifySections(sections, ['expands', 'as']);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var expandsSection = null;
    var expandsNode = sectionMap.get_11rb$('expands');
    var expandsEvaluation = validateExpandsSection(ensureNotNull(expandsNode).get_za3lpa$(0), tracker);
    if (Kotlin.isType(expandsEvaluation, ValidationSuccess))
      expandsSection = expandsEvaluation.value;
    else if (Kotlin.isType(expandsEvaluation, ValidationFailure))
      errors.addAll_brywnq$(expandsEvaluation.errors);
    else
      Kotlin.noWhenBranchMatched();
    var asSection = null;
    var asNode = sectionMap.get_11rb$('as');
    var asValidation = validateAsSection(ensureNotNull(asNode).get_za3lpa$(0), tracker);
    if (Kotlin.isType(asValidation, ValidationSuccess))
      asSection = asValidation.value;
    else if (Kotlin.isType(asValidation, ValidationFailure))
      errors.addAll_brywnq$(asValidation.errors);
    else
      Kotlin.noWhenBranchMatched();
    if (expandsSection == null) {
      errors.add_11rb$(new ParseError("Expected a 'expands:' section", getRow(rawNode), getColumn(rawNode)));
    }
    if (asSection == null) {
      errors.add_11rb$(new ParseError("Expected a 'as:' section", getRow(rawNode), getColumn(rawNode)));
    }
    if (!errors.isEmpty()) {
      tmp$ = validationFailure(errors);
    }
     else
      tmp$ = validationSuccess_0(tracker, rawNode, new ExpandsGroup(ensureNotNull(expandsSection), ensureNotNull(asSection)));
    return tmp$;
  }
  function ForGroup(forSection, whereSection, thenSection) {
    this.forSection = forSection;
    this.whereSection = whereSection;
    this.thenSection = thenSection;
  }
  ForGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.forSection);
    if (this.whereSection != null) {
      fn(this.whereSection);
    }
    fn(this.thenSection);
  };
  ForGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode_0(writer, isArg, indent, [this.forSection, this.whereSection, this.thenSection]);
  };
  ForGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return chalkTransformer(new ForGroup(Kotlin.isType(tmp$ = this.forSection.transform_ql661s$(chalkTransformer), ForSection) ? tmp$ : throwCCE(), (tmp$_1 = (tmp$_0 = this.whereSection) != null ? tmp$_0.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_1, WhereSection) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = this.thenSection.transform_ql661s$(chalkTransformer), ThenSection) ? tmp$_2 : throwCCE()));
  };
  ForGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForGroup',
    interfaces: [Clause]
  };
  ForGroup.prototype.component1 = function () {
    return this.forSection;
  };
  ForGroup.prototype.component2 = function () {
    return this.whereSection;
  };
  ForGroup.prototype.component3 = function () {
    return this.thenSection;
  };
  ForGroup.prototype.copy_1ikzo7$ = function (forSection, whereSection, thenSection) {
    return new ForGroup(forSection === void 0 ? this.forSection : forSection, whereSection === void 0 ? this.whereSection : whereSection, thenSection === void 0 ? this.thenSection : thenSection);
  };
  ForGroup.prototype.toString = function () {
    return 'ForGroup(forSection=' + Kotlin.toString(this.forSection) + (', whereSection=' + Kotlin.toString(this.whereSection)) + (', thenSection=' + Kotlin.toString(this.thenSection)) + ')';
  };
  ForGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.forSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.whereSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.thenSection) | 0;
    return result;
  };
  ForGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.forSection, other.forSection) && Kotlin.equals(this.whereSection, other.whereSection) && Kotlin.equals(this.thenSection, other.thenSection)))));
  };
  function isForGroup(node) {
    return firstSectionMatchesName(node, 'for');
  }
  function validateForGroup(rawNode, tracker) {
    var tmp$;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Group)) {
      errors.add_11rb$(new ParseError('Expected a Group', getRow(node), getColumn(node)));
      return validationFailure(errors);
    }
    var sections = node.component1();
    var sectionMap;
    try {
      sectionMap = identifySections(sections, ['for', 'where?', 'then']);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var forSection = null;
    var forNode = sectionMap.get_11rb$('for');
    var forEvaluation = validateForSection(ensureNotNull(forNode).get_za3lpa$(0), tracker);
    if (Kotlin.isType(forEvaluation, ValidationSuccess))
      forSection = forEvaluation.value;
    else if (Kotlin.isType(forEvaluation, ValidationFailure))
      errors.addAll_brywnq$(forEvaluation.errors);
    else
      Kotlin.noWhenBranchMatched();
    var whereSection = null;
    var tmp$_0 = sectionMap.containsKey_11rb$('where');
    if (tmp$_0) {
      tmp$_0 = !ensureNotNull(sectionMap.get_11rb$('where')).isEmpty();
    }
    if (tmp$_0) {
      var where = ensureNotNull(sectionMap.get_11rb$('where'));
      var whereValidation = validateWhereSection(where.get_za3lpa$(0), tracker);
      if (Kotlin.isType(whereValidation, ValidationSuccess))
        whereSection = whereValidation.value;
      else if (Kotlin.isType(whereValidation, ValidationFailure))
        errors.addAll_brywnq$(whereValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    var thenSection = null;
    var then = sectionMap.get_11rb$('then');
    var thenValidation = validateThenSection(ensureNotNull(then).get_za3lpa$(0), tracker);
    if (Kotlin.isType(thenValidation, ValidationSuccess))
      thenSection = thenValidation.value;
    else if (Kotlin.isType(thenValidation, ValidationFailure))
      errors.addAll_brywnq$(thenValidation.errors);
    else
      Kotlin.noWhenBranchMatched();
    if (!errors.isEmpty()) {
      tmp$ = validationFailure(errors);
    }
     else
      tmp$ = validationSuccess_0(tracker, rawNode, new ForGroup(ensureNotNull(forSection), whereSection, ensureNotNull(thenSection)));
    return tmp$;
  }
  function IdStatement(text, texTalkRoot) {
    this.text = text;
    this.texTalkRoot = texTalkRoot;
  }
  IdStatement.prototype.forEach_s8izwl$ = function (fn) {
  };
  IdStatement.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeId_uaa61e$(this);
    return writer;
  };
  IdStatement.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  IdStatement.prototype.toStatement = function () {
    return new Statement(this.text, this.texTalkRoot);
  };
  IdStatement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdStatement',
    interfaces: [Clause]
  };
  IdStatement.prototype.component1 = function () {
    return this.text;
  };
  IdStatement.prototype.component2 = function () {
    return this.texTalkRoot;
  };
  IdStatement.prototype.copy_ytmu5s$ = function (text, texTalkRoot) {
    return new IdStatement(text === void 0 ? this.text : text, texTalkRoot === void 0 ? this.texTalkRoot : texTalkRoot);
  };
  IdStatement.prototype.toString = function () {
    return 'IdStatement(text=' + Kotlin.toString(this.text) + (', texTalkRoot=' + Kotlin.toString(this.texTalkRoot)) + ')';
  };
  IdStatement.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.texTalkRoot) | 0;
    return result;
  };
  IdStatement.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.texTalkRoot, other.texTalkRoot)))));
  };
  function validateIdStatement(rawNode, tracker) {
    var validation = validateStatement(rawNode, tracker);
    if (Kotlin.isType(validation, ValidationSuccess))
      return validationSuccess_0(tracker, rawNode, new IdStatement(validation.value.text, validation.value.texTalkRoot));
    else if (Kotlin.isType(validation, ValidationFailure))
      return validationFailure(validation.errors);
    else
      return Kotlin.noWhenBranchMatched();
  }
  function Identifier(name, isVarArgs) {
    this.name = name;
    this.isVarArgs = isVarArgs;
  }
  Identifier.prototype.forEach_s8izwl$ = function (fn) {
  };
  Identifier.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeIdentifier_ivxn3r$(this.name, this.isVarArgs);
    return writer;
  };
  Identifier.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  Identifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Identifier',
    interfaces: [Target]
  };
  Identifier.prototype.component1 = function () {
    return this.name;
  };
  Identifier.prototype.component2 = function () {
    return this.isVarArgs;
  };
  Identifier.prototype.copy_ivxn3r$ = function (name, isVarArgs) {
    return new Identifier(name === void 0 ? this.name : name, isVarArgs === void 0 ? this.isVarArgs : isVarArgs);
  };
  Identifier.prototype.toString = function () {
    return 'Identifier(name=' + Kotlin.toString(this.name) + (', isVarArgs=' + Kotlin.toString(this.isVarArgs)) + ')';
  };
  Identifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.isVarArgs) | 0;
    return result;
  };
  Identifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.isVarArgs, other.isVarArgs)))));
  };
  function isIdentifier(node) {
    return Kotlin.isType(node, Phase1Token) && node.type === ChalkTalkTokenType$Name_getInstance();
  }
  function validateIdentifier(rawNode, tracker) {
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Phase1Token)) {
      errors.add_11rb$(new ParseError('Cannot convert to a ChalkTalkToken', getRow(node), getColumn(node)));
      return validationFailure(errors);
    }
    var text = node.component1()
    , type = node.component2()
    , row = node.component3()
    , column = node.component4();
    if (type !== ChalkTalkTokenType$Name_getInstance()) {
      errors.add_11rb$(new ParseError('A token of type ' + type + ' is not an identifier', row, column));
      return validationFailure(errors);
    }
    var realText = text;
    var isVarArgs = false;
    if (endsWith(text, '...')) {
      var endIndex = text.length - 3 | 0;
      realText = text.substring(0, endIndex);
      isVarArgs = true;
    }
    return validationSuccess_0(tracker, rawNode, new Identifier(realText, isVarArgs));
  }
  function IfGroup(ifSection, thenSection) {
    this.ifSection = ifSection;
    this.thenSection = thenSection;
  }
  IfGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.ifSection);
    fn(this.thenSection);
  };
  IfGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode_0(writer, isArg, indent, [this.ifSection, this.thenSection]);
  };
  IfGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0;
    return chalkTransformer(new IfGroup(Kotlin.isType(tmp$ = this.ifSection.transform_ql661s$(chalkTransformer), IfSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.thenSection.transform_ql661s$(chalkTransformer), ThenSection) ? tmp$_0 : throwCCE()));
  };
  IfGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IfGroup',
    interfaces: [Clause]
  };
  IfGroup.prototype.component1 = function () {
    return this.ifSection;
  };
  IfGroup.prototype.component2 = function () {
    return this.thenSection;
  };
  IfGroup.prototype.copy_pgex78$ = function (ifSection, thenSection) {
    return new IfGroup(ifSection === void 0 ? this.ifSection : ifSection, thenSection === void 0 ? this.thenSection : thenSection);
  };
  IfGroup.prototype.toString = function () {
    return 'IfGroup(ifSection=' + Kotlin.toString(this.ifSection) + (', thenSection=' + Kotlin.toString(this.thenSection)) + ')';
  };
  IfGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ifSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.thenSection) | 0;
    return result;
  };
  IfGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ifSection, other.ifSection) && Kotlin.equals(this.thenSection, other.thenSection)))));
  };
  function isIfGroup(node) {
    return firstSectionMatchesName(node, 'if');
  }
  function validateIfGroup(node, tracker) {
    return validateDoubleSectionGroup(tracker, node, 'if', getCallableRef('validateIfSection', function (node, tracker) {
      return validateIfSection(node, tracker);
    }), 'then', getCallableRef('validateThenSection', function (node, tracker) {
      return validateThenSection(node, tracker);
    }), getCallableRef('IfGroup', function (ifSection, thenSection) {
      return new IfGroup(ifSection, thenSection);
    }));
  }
  function IffGroup(iffSection, thenSection) {
    this.iffSection = iffSection;
    this.thenSection = thenSection;
  }
  IffGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.iffSection);
    fn(this.thenSection);
  };
  IffGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode_0(writer, isArg, indent, [this.iffSection, this.thenSection]);
  };
  IffGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0;
    return chalkTransformer(new IffGroup(Kotlin.isType(tmp$ = this.iffSection.transform_ql661s$(chalkTransformer), IffSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.thenSection.transform_ql661s$(chalkTransformer), ThenSection) ? tmp$_0 : throwCCE()));
  };
  IffGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IffGroup',
    interfaces: [Clause]
  };
  IffGroup.prototype.component1 = function () {
    return this.iffSection;
  };
  IffGroup.prototype.component2 = function () {
    return this.thenSection;
  };
  IffGroup.prototype.copy_b2iifo$ = function (iffSection, thenSection) {
    return new IffGroup(iffSection === void 0 ? this.iffSection : iffSection, thenSection === void 0 ? this.thenSection : thenSection);
  };
  IffGroup.prototype.toString = function () {
    return 'IffGroup(iffSection=' + Kotlin.toString(this.iffSection) + (', thenSection=' + Kotlin.toString(this.thenSection)) + ')';
  };
  IffGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.iffSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.thenSection) | 0;
    return result;
  };
  IffGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.iffSection, other.iffSection) && Kotlin.equals(this.thenSection, other.thenSection)))));
  };
  function isIffGroup(node) {
    return firstSectionMatchesName(node, 'iff');
  }
  function validateIffGroup(node, tracker) {
    return validateDoubleSectionGroup(tracker, node, 'iff', getCallableRef('validateIffSection', function (node, tracker) {
      return validateIffSection(node, tracker);
    }), 'then', getCallableRef('validateThenSection', function (node, tracker) {
      return validateThenSection(node, tracker);
    }), getCallableRef('IffGroup', function (iffSection, thenSection) {
      return new IffGroup(iffSection, thenSection);
    }));
  }
  function MappingNode(mapping) {
    this.mapping = mapping;
  }
  MappingNode.prototype.forEach_s8izwl$ = function (fn) {
  };
  MappingNode.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode(writer, isArg, indent, this.mapping);
  };
  MappingNode.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  MappingNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MappingNode',
    interfaces: [Phase2Node]
  };
  MappingNode.prototype.component1 = function () {
    return this.mapping;
  };
  MappingNode.prototype.copy_fatphs$ = function (mapping) {
    return new MappingNode(mapping === void 0 ? this.mapping : mapping);
  };
  MappingNode.prototype.toString = function () {
    return 'MappingNode(mapping=' + Kotlin.toString(this.mapping) + ')';
  };
  MappingNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mapping) | 0;
    return result;
  };
  MappingNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.mapping, other.mapping))));
  };
  function isMapping(node) {
    return Kotlin.isType(node, Mapping);
  }
  function validateMappingNode$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = it, Mapping) ? tmp$ : null;
  }
  function validateMappingNode(node, tracker) {
    return validateWrappedNode(tracker, node, 'MappingNode', validateMappingNode$lambda, getCallableRef('MappingNode', function (mapping) {
      return new MappingNode(mapping);
    }));
  }
  function NotGroup(notSection) {
    this.notSection = notSection;
  }
  NotGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.notSection);
  };
  NotGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return this.notSection.toCode_pc06dk$(isArg, indent, writer);
  };
  NotGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new NotGroup(Kotlin.isType(tmp$ = this.notSection.transform_ql661s$(chalkTransformer), NotSection) ? tmp$ : throwCCE()));
  };
  NotGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotGroup',
    interfaces: [Clause]
  };
  NotGroup.prototype.component1 = function () {
    return this.notSection;
  };
  NotGroup.prototype.copy_9u6s5k$ = function (notSection) {
    return new NotGroup(notSection === void 0 ? this.notSection : notSection);
  };
  NotGroup.prototype.toString = function () {
    return 'NotGroup(notSection=' + Kotlin.toString(this.notSection) + ')';
  };
  NotGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.notSection) | 0;
    return result;
  };
  NotGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.notSection, other.notSection))));
  };
  function isNotGroup(node) {
    return firstSectionMatchesName(node, 'not');
  }
  function validateNotGroup(node, tracker) {
    return validateSingleSectionGroup(tracker, node, 'not', getCallableRef('NotGroup', function (notSection) {
      return new NotGroup(notSection);
    }), getCallableRef('validateNotSection', function (node, tracker) {
      return validateNotSection(node, tracker);
    }));
  }
  function OrGroup(orSection) {
    this.orSection = orSection;
  }
  OrGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.orSection);
  };
  OrGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return this.orSection.toCode_pc06dk$(isArg, indent, writer);
  };
  OrGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new OrGroup(Kotlin.isType(tmp$ = this.orSection.transform_ql661s$(chalkTransformer), OrSection) ? tmp$ : throwCCE()));
  };
  OrGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrGroup',
    interfaces: [Clause]
  };
  OrGroup.prototype.component1 = function () {
    return this.orSection;
  };
  OrGroup.prototype.copy_4afqe4$ = function (orSection) {
    return new OrGroup(orSection === void 0 ? this.orSection : orSection);
  };
  OrGroup.prototype.toString = function () {
    return 'OrGroup(orSection=' + Kotlin.toString(this.orSection) + ')';
  };
  OrGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.orSection) | 0;
    return result;
  };
  OrGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.orSection, other.orSection))));
  };
  function isOrGroup(node) {
    return firstSectionMatchesName(node, 'or');
  }
  function validateOrGroup(node, tracker) {
    return validateSingleSectionGroup(tracker, node, 'or', getCallableRef('OrGroup', function (orSection) {
      return new OrGroup(orSection);
    }), getCallableRef('validateOrSection', function (node, tracker) {
      return validateOrSection(node, tracker);
    }));
  }
  function Statement(text, texTalkRoot) {
    this.text = text;
    this.texTalkRoot = texTalkRoot;
  }
  Statement.prototype.forEach_s8izwl$ = function (fn) {
  };
  Statement.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeStatement_ytmu5s$(this.text, this.texTalkRoot);
    return writer;
  };
  Statement.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  Statement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Statement',
    interfaces: [Clause]
  };
  Statement.prototype.component1 = function () {
    return this.text;
  };
  Statement.prototype.component2 = function () {
    return this.texTalkRoot;
  };
  Statement.prototype.copy_ytmu5s$ = function (text, texTalkRoot) {
    return new Statement(text === void 0 ? this.text : text, texTalkRoot === void 0 ? this.texTalkRoot : texTalkRoot);
  };
  Statement.prototype.toString = function () {
    return 'Statement(text=' + Kotlin.toString(this.text) + (', texTalkRoot=' + Kotlin.toString(this.texTalkRoot)) + ')';
  };
  Statement.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.texTalkRoot) | 0;
    return result;
  };
  Statement.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.texTalkRoot, other.texTalkRoot)))));
  };
  function isStatement(node) {
    return Kotlin.isType(node, Phase1Token) && node.type === ChalkTalkTokenType$Statement_getInstance();
  }
  function validateStatement(rawNode, tracker) {
    var tmp$, tmp$_0;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Phase1Token)) {
      errors.add_11rb$(new ParseError('Cannot convert a to a ChalkTalkToken', getRow(node), getColumn(node)));
    }
    var tmp$_1 = Kotlin.isType(tmp$ = node, Phase1Token) ? tmp$ : throwCCE();
    var rawText = tmp$_1.component1()
    , type = tmp$_1.component2()
    , row = tmp$_1.component3()
    , column = tmp$_1.component4();
    if (type !== ChalkTalkTokenType$Statement_getInstance()) {
      errors.add_11rb$(new ParseError('Cannot convert a ' + node.toCode() + ' to a Statement', row, column));
      return validationFailure(errors);
    }
    var endIndex = rawText.length - 1 | 0;
    var text = rawText.substring(1, endIndex);
    var texTalkErrors = ArrayList_init();
    var lexer = newTexTalkLexer(text);
    texTalkErrors.addAll_brywnq$(lexer.errors);
    var parser = newTexTalkParser();
    var result = parser.parse_2mg13h$(lexer);
    texTalkErrors.addAll_brywnq$(result.errors);
    if (texTalkErrors.isEmpty()) {
      tmp$_0 = validationSuccess(result.root);
    }
     else {
      tmp$_0 = validationFailure(texTalkErrors);
    }
    var validation = tmp$_0;
    return validationSuccess_0(tracker, rawNode, new Statement(text, validation));
  }
  function TargetListSection(targets) {
    this.targets = targets;
  }
  TargetListSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TargetListSection',
    interfaces: []
  };
  TargetListSection.prototype.component1 = function () {
    return this.targets;
  };
  TargetListSection.prototype.copy_jev4lk$ = function (targets) {
    return new TargetListSection(targets === void 0 ? this.targets : targets);
  };
  TargetListSection.prototype.toString = function () {
    return 'TargetListSection(targets=' + Kotlin.toString(this.targets) + ')';
  };
  TargetListSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.targets) | 0;
    return result;
  };
  TargetListSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.targets, other.targets))));
  };
  function validateTargetList(tracker, rawNode, expectedName, builder) {
    var tmp$;
    var node = rawNode.resolve();
    var validation = validateTargetListSection(tracker, node, expectedName);
    if (Kotlin.isType(validation, ValidationSuccess)) {
      var targets = validation.value.targets;
      return validationSuccess_0(tracker, rawNode, builder(targets));
    }
     else if (Kotlin.isType(validation, ValidationFailure))
      tmp$ = validationFailure(validation.errors);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  }
  function validateTargetListSection(tracker, node, expectedName) {
    var tmp$, tmp$_0, tmp$_1;
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Section)) {
      errors.add_11rb$(new ParseError('Expected a Section', getRow(node), getColumn(node)));
    }
    var tmp$_2 = Kotlin.isType(tmp$ = node, Section) ? tmp$ : throwCCE();
    var name1 = tmp$_2.component1()
    , args = tmp$_2.component2();
    var name = name1.text;
    if (!equals(name, expectedName)) {
      errors.add_11rb$(new ParseError('Expected a Section with name ' + expectedName + ' but found ' + name, getRow(node), getColumn(node)));
    }
    var targets = ArrayList_init();
    if (args.isEmpty()) {
      errors.add_11rb$(new ParseError("Section '" + name1.text + "' requires at least one argument.", getRow(node), getColumn(node)));
    }
    tmp$_0 = args.iterator();
    while (tmp$_0.hasNext()) {
      var arg = tmp$_0.next();
      var shouldContinue = false;
      var clauseValidation = validateClause(arg, tracker);
      if (Kotlin.isType(clauseValidation, ValidationSuccess)) {
        var clause = clauseValidation.value;
        if (Kotlin.isType(clause, Target)) {
          targets.add_11rb$(clause);
          shouldContinue = true;
        }
      }
       else if (Kotlin.isType(clauseValidation, ValidationFailure))
        errors.addAll_brywnq$(clauseValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
      if (shouldContinue) {
        continue;
      }
      errors.add_11rb$(new ParseError('Expected an Target', getRow(arg), getColumn(arg)));
    }
    if (!errors.isEmpty()) {
      tmp$_1 = validationFailure(errors);
    }
     else
      tmp$_1 = validationSuccess(new TargetListSection(targets));
    return tmp$_1;
  }
  function Text(text) {
    this.text = text;
  }
  Text.prototype.forEach_s8izwl$ = function (fn) {
  };
  Text.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeText_61zpoe$(removeSurrounding(this.text, '"', '"'));
    return writer;
  };
  Text.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [Clause]
  };
  Text.prototype.component1 = function () {
    return this.text;
  };
  Text.prototype.copy_61zpoe$ = function (text) {
    return new Text(text === void 0 ? this.text : text);
  };
  Text.prototype.toString = function () {
    return 'Text(text=' + Kotlin.toString(this.text) + ')';
  };
  Text.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Text.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.text, other.text))));
  };
  function isText(node) {
    return Kotlin.isType(node, Phase1Token) && node.type === ChalkTalkTokenType$String_getInstance();
  }
  function validateText(rawNode, tracker) {
    var tmp$;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Phase1Token)) {
      errors.add_11rb$(new ParseError('Cannot convert a to a ChalkTalkToken', getRow(node), getColumn(node)));
    }
    var tmp$_0 = Kotlin.isType(tmp$ = node, Phase1Token) ? tmp$ : throwCCE();
    var text = tmp$_0.component1()
    , type = tmp$_0.component2()
    , row = tmp$_0.component3()
    , column = tmp$_0.component4();
    if (type !== ChalkTalkTokenType$String_getInstance()) {
      errors.add_11rb$(new ParseError('Cannot convert a ' + node.toCode() + ' to Text', row, column));
      return validationFailure(errors);
    }
    return validationSuccess_0(tracker, rawNode, new Text(text));
  }
  function TupleNode(tuple) {
    this.tuple = tuple;
  }
  TupleNode.prototype.forEach_s8izwl$ = function (fn) {
  };
  TupleNode.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return toCode(writer, isArg, indent, this.tuple);
  };
  TupleNode.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  TupleNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TupleNode',
    interfaces: [Target]
  };
  TupleNode.prototype.component1 = function () {
    return this.tuple;
  };
  TupleNode.prototype.copy_hsayfq$ = function (tuple) {
    return new TupleNode(tuple === void 0 ? this.tuple : tuple);
  };
  TupleNode.prototype.toString = function () {
    return 'TupleNode(tuple=' + Kotlin.toString(this.tuple) + ')';
  };
  TupleNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tuple) | 0;
    return result;
  };
  TupleNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.tuple, other.tuple))));
  };
  function isTuple(node) {
    return Kotlin.isType(node, Tuple);
  }
  function validateTupleNode$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = it, Tuple) ? tmp$ : null;
  }
  function validateTupleNode(node, tracker) {
    return validateWrappedNode(tracker, node, 'TupleNode', validateTupleNode$lambda, getCallableRef('TupleNode', function (tuple) {
      return new TupleNode(tuple);
    }));
  }
  function indentedStringSection(writer, isArg, indent, sectionName, value) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$(sectionName);
    writer.writeSpace();
    writer.writeText_61zpoe$(removeSurrounding(value, '"', '"'));
    return writer;
  }
  function validateStringSection(tracker, rawNode, expectedName, fn) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Section)) {
      errors.add_11rb$(new ParseError('Expected a Section', getRow(node), getColumn(node)));
    }
    var tmp$_3 = Kotlin.isType(tmp$ = node, Section) ? tmp$ : throwCCE();
    var name = tmp$_3.component1()
    , args = tmp$_3.component2();
    if (!equals(name.text, expectedName)) {
      errors.add_11rb$(new ParseError('Expected a Section with name ' + expectedName + ' but found ' + name.text, getRow(node), getColumn(node)));
    }
    if (args.size !== 1 || !Kotlin.isType(args.get_za3lpa$(0).chalkTalkTarget, Phase1Token) || (Kotlin.isType(tmp$_0 = args.get_za3lpa$(0).chalkTalkTarget, Phase1Token) ? tmp$_0 : throwCCE()).type !== ChalkTalkTokenType$String_getInstance()) {
      errors.add_11rb$(new ParseError("Section '" + name.text + "' requires a single string argument.", getRow(node), getColumn(node)));
    }
    var token = Kotlin.isType(tmp$_1 = args.get_za3lpa$(0).chalkTalkTarget, Phase1Token) ? tmp$_1 : throwCCE();
    if (!errors.isEmpty()) {
      tmp$_2 = validationFailure(errors);
    }
     else
      tmp$_2 = validationSuccess_0(tracker, rawNode, fn(token.text));
    return tmp$_2;
  }
  function isSingleSectionGroup(node) {
    if (!Kotlin.isType(node, Group)) {
      return false;
    }
    return node.sections.size === 1;
  }
  function MetaDataItem() {
  }
  MetaDataItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MetaDataItem',
    interfaces: [Phase2Node]
  };
  function ReferenceGroup(referenceSection) {
    MetaDataItem.call(this);
    this.referenceSection = referenceSection;
  }
  ReferenceGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.referenceSection);
  };
  ReferenceGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return this.referenceSection.toCode_pc06dk$(isArg, indent, writer);
  };
  ReferenceGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new ReferenceGroup(Kotlin.isType(tmp$ = chalkTransformer(this.referenceSection), ReferenceSection) ? tmp$ : throwCCE()));
  };
  ReferenceGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReferenceGroup',
    interfaces: [MetaDataItem]
  };
  ReferenceGroup.prototype.component1 = function () {
    return this.referenceSection;
  };
  ReferenceGroup.prototype.copy_7t9dqd$ = function (referenceSection) {
    return new ReferenceGroup(referenceSection === void 0 ? this.referenceSection : referenceSection);
  };
  ReferenceGroup.prototype.toString = function () {
    return 'ReferenceGroup(referenceSection=' + Kotlin.toString(this.referenceSection) + ')';
  };
  ReferenceGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.referenceSection) | 0;
    return result;
  };
  ReferenceGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.referenceSection, other.referenceSection))));
  };
  function isReferenceGroup(node) {
    return firstSectionMatchesName(node, 'reference');
  }
  function validateReferenceGroup(groupNode, tracker) {
    var tmp$;
    var errors = ArrayList_init();
    var group = groupNode.resolve();
    if (group.id != null) {
      errors.add_11rb$(new ParseError('A reference cannot have an Id', getRow(group), getColumn(group)));
    }
    var sections = group.sections;
    var sectionMap;
    try {
      sectionMap = identifySections(sections, ['reference']);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var rawReference = ensureNotNull(sectionMap.get_11rb$('reference')).get_za3lpa$(0);
    var referenceSection = null;
    var validation = validateReferenceSection(rawReference, tracker);
    if (Kotlin.isType(validation, ValidationSuccess))
      referenceSection = validation.value;
    else if (Kotlin.isType(validation, ValidationFailure))
      errors.addAll_brywnq$(validation.errors);
    else
      Kotlin.noWhenBranchMatched();
    if (!errors.isEmpty()) {
      tmp$ = validationFailure(errors);
    }
     else {
      tmp$ = validationSuccess_0(tracker, groupNode, new ReferenceGroup(ensureNotNull(referenceSection)));
    }
    return tmp$;
  }
  function validateReferenceSection(rawNode, tracker) {
    var tmp$, tmp$_0, tmp$_1;
    var node = rawNode.resolve();
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Section)) {
      errors.add_11rb$(new ParseError('Expected a Section', getRow(node), getColumn(node)));
    }
    var tmp$_2 = Kotlin.isType(tmp$ = node, Section) ? tmp$ : throwCCE();
    var name = tmp$_2.component1()
    , args = tmp$_2.component2();
    if (!equals(name.text, 'reference')) {
      errors.add_11rb$(new ParseError("Expected a Section with name 'reference' but found " + name.text, getRow(node), getColumn(node)));
    }
    if (args.isEmpty()) {
      errors.add_11rb$(new ParseError("Section '" + name.text + "' requires at least one 'source' argument.", getRow(node), getColumn(node)));
    }
    var sourceItems = ArrayList_init();
    tmp$_0 = args.iterator();
    while (tmp$_0.hasNext()) {
      var arg = tmp$_0.next();
      if (Kotlin.isType(arg.chalkTalkTarget, Group)) {
        var validation = validateSourceItemGroup(arg.chalkTalkTarget, tracker);
        if (Kotlin.isType(validation, ValidationSuccess))
          sourceItems.add_11rb$(validation.value);
        else if (Kotlin.isType(validation, ValidationFailure))
          errors.addAll_brywnq$(validation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else {
        errors.add_11rb$(new ParseError("Expected a 'source' group but found " + arg.toCode(), getRow(arg), getColumn(arg)));
      }
    }
    if (!errors.isEmpty()) {
      tmp$_1 = validationFailure(errors);
    }
     else
      tmp$_1 = validationSuccess_0(tracker, rawNode, new ReferenceSection(sourceItems));
    return tmp$_1;
  }
  function SourceItemGroup(sourceSection, pageSection, offsetSection, contentSection) {
    MetaDataItem.call(this);
    this.sourceSection = sourceSection;
    this.pageSection = pageSection;
    this.offsetSection = offsetSection;
    this.contentSection = contentSection;
  }
  SourceItemGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.sourceSection);
    if (this.pageSection != null) {
      fn(this.pageSection);
    }
    if (this.offsetSection != null) {
      fn(this.offsetSection);
    }
    if (this.contentSection != null) {
      fn(this.contentSection);
    }
  };
  SourceItemGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return topLevelToCode(writer, isArg, indent, null, [this.sourceSection, this.pageSection, this.offsetSection, this.contentSection]);
  };
  SourceItemGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    return chalkTransformer(new SourceItemGroup(Kotlin.isType(tmp$ = this.sourceSection.transform_ql661s$(chalkTransformer), SourceItemSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_1 = (tmp$_0 = this.pageSection) != null ? tmp$_0.transform_ql661s$(chalkTransformer) : null, PageItemSection) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_3 = (tmp$_2 = this.offsetSection) != null ? tmp$_2.transform_ql661s$(chalkTransformer) : null, OffsetItemSection) ? tmp$_3 : throwCCE(), Kotlin.isType(tmp$_5 = (tmp$_4 = this.contentSection) != null ? tmp$_4.transform_ql661s$(chalkTransformer) : null, ContentItemSection) ? tmp$_5 : throwCCE()));
  };
  SourceItemGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SourceItemGroup',
    interfaces: [MetaDataItem]
  };
  SourceItemGroup.prototype.component1 = function () {
    return this.sourceSection;
  };
  SourceItemGroup.prototype.component2 = function () {
    return this.pageSection;
  };
  SourceItemGroup.prototype.component3 = function () {
    return this.offsetSection;
  };
  SourceItemGroup.prototype.component4 = function () {
    return this.contentSection;
  };
  SourceItemGroup.prototype.copy_v9fgpr$ = function (sourceSection, pageSection, offsetSection, contentSection) {
    return new SourceItemGroup(sourceSection === void 0 ? this.sourceSection : sourceSection, pageSection === void 0 ? this.pageSection : pageSection, offsetSection === void 0 ? this.offsetSection : offsetSection, contentSection === void 0 ? this.contentSection : contentSection);
  };
  SourceItemGroup.prototype.toString = function () {
    return 'SourceItemGroup(sourceSection=' + Kotlin.toString(this.sourceSection) + (', pageSection=' + Kotlin.toString(this.pageSection)) + (', offsetSection=' + Kotlin.toString(this.offsetSection)) + (', contentSection=' + Kotlin.toString(this.contentSection)) + ')';
  };
  SourceItemGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sourceSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.offsetSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.contentSection) | 0;
    return result;
  };
  SourceItemGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sourceSection, other.sourceSection) && Kotlin.equals(this.pageSection, other.pageSection) && Kotlin.equals(this.offsetSection, other.offsetSection) && Kotlin.equals(this.contentSection, other.contentSection)))));
  };
  function isSourceItemGroup(node) {
    return firstSectionMatchesName(node, 'source');
  }
  function validateSourceItemGroup(groupNode, tracker) {
    var tmp$;
    var errors = ArrayList_init();
    var group = groupNode.resolve();
    if (group.id != null) {
      errors.add_11rb$(new ParseError('A reference source cannot have an Id', getRow(group), getColumn(group)));
    }
    var sections = group.sections;
    var sectionMap;
    try {
      sectionMap = identifySections(sections, ['source', 'page?', 'offset?', 'content?']);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var rawSource = ensureNotNull(sectionMap.get_11rb$('source')).get_za3lpa$(0);
    var sourceSection = null;
    var validation = validateStringSection(tracker, rawSource, 'source', getCallableRef('SourceItemSection', function (sourceReference) {
      return new SourceItemSection(sourceReference);
    }));
    if (Kotlin.isType(validation, ValidationSuccess))
      sourceSection = validation.value;
    else if (Kotlin.isType(validation, ValidationFailure))
      errors.addAll_brywnq$(validation.errors);
    else
      Kotlin.noWhenBranchMatched();
    var rawPage = sectionMap.get_11rb$('page');
    var pageSection = null;
    var tmp$_0 = rawPage != null;
    if (tmp$_0) {
      tmp$_0 = !rawPage.isEmpty();
    }
    if (tmp$_0) {
      var validation_0 = validateStringSection(tracker, rawPage.get_za3lpa$(0), 'page', getCallableRef('PageItemSection', function (page) {
        return new PageItemSection(page);
      }));
      if (Kotlin.isType(validation_0, ValidationSuccess))
        pageSection = validation_0.value;
      else if (Kotlin.isType(validation_0, ValidationFailure))
        errors.addAll_brywnq$(validation_0.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    var rawOffset = sectionMap.get_11rb$('offset');
    var offsetSection = null;
    var tmp$_1 = rawOffset != null;
    if (tmp$_1) {
      tmp$_1 = !rawOffset.isEmpty();
    }
    if (tmp$_1) {
      var validation_1 = validateStringSection(tracker, rawOffset.get_za3lpa$(0), 'offset', getCallableRef('OffsetItemSection', function (offset) {
        return new OffsetItemSection(offset);
      }));
      if (Kotlin.isType(validation_1, ValidationSuccess))
        offsetSection = validation_1.value;
      else if (Kotlin.isType(validation_1, ValidationFailure))
        errors.addAll_brywnq$(validation_1.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    var rawContent = sectionMap.get_11rb$('content');
    var contentSection = null;
    var tmp$_2 = rawContent != null;
    if (tmp$_2) {
      tmp$_2 = !rawContent.isEmpty();
    }
    if (tmp$_2) {
      var validation_2 = validateStringSection(tracker, rawContent.get_za3lpa$(0), 'content', getCallableRef('ContentItemSection', function (content) {
        return new ContentItemSection(content);
      }));
      if (Kotlin.isType(validation_2, ValidationSuccess))
        contentSection = validation_2.value;
      else if (Kotlin.isType(validation_2, ValidationFailure))
        errors.addAll_brywnq$(validation_2.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    if (!errors.isEmpty()) {
      tmp$ = validationFailure(errors);
    }
     else {
      tmp$ = validationSuccess_0(tracker, groupNode, new SourceItemGroup(ensureNotNull(sourceSection), pageSection, offsetSection, contentSection));
    }
    return tmp$;
  }
  function StringSectionGroup(section) {
    MetaDataItem.call(this);
    this.section = section;
  }
  StringSectionGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.section);
  };
  StringSectionGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return this.section.toCode_pc06dk$(isArg, indent, writer);
  };
  StringSectionGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new StringSectionGroup(Kotlin.isType(tmp$ = chalkTransformer(this.section), StringSection) ? tmp$ : throwCCE()));
  };
  StringSectionGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringSectionGroup',
    interfaces: [MetaDataItem]
  };
  function ContentItemSection(content) {
    this.content = content;
  }
  ContentItemSection.prototype.forEach_s8izwl$ = function (fn) {
  };
  ContentItemSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return indentedStringSection(writer, isArg, indent, 'content', this.content);
  };
  ContentItemSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  ContentItemSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContentItemSection',
    interfaces: [Phase2Node]
  };
  ContentItemSection.prototype.component1 = function () {
    return this.content;
  };
  ContentItemSection.prototype.copy_61zpoe$ = function (content) {
    return new ContentItemSection(content === void 0 ? this.content : content);
  };
  ContentItemSection.prototype.toString = function () {
    return 'ContentItemSection(content=' + Kotlin.toString(this.content) + ')';
  };
  ContentItemSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  ContentItemSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  var META_DATA_ITEM_CONSTRAINTS;
  function MetaDataSection(items) {
    this.items = items;
  }
  MetaDataSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.items.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  MetaDataSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var tmp$;
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Metadata');
    tmp$ = this.items;
    for (var i = 0; i !== tmp$.size; ++i) {
      writer.writeNewline_za3lpa$();
      writer.append_v8axul$(this.items.get_za3lpa$(i), true, indent + 2 | 0);
    }
    return writer;
  };
  MetaDataSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.items;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), MetaDataItem) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new MetaDataSection(destination));
  };
  MetaDataSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MetaDataSection',
    interfaces: [Phase2Node]
  };
  MetaDataSection.prototype.component1 = function () {
    return this.items;
  };
  MetaDataSection.prototype.copy_8m5e8m$ = function (items) {
    return new MetaDataSection(items === void 0 ? this.items : items);
  };
  MetaDataSection.prototype.toString = function () {
    return 'MetaDataSection(items=' + Kotlin.toString(this.items) + ')';
  };
  MetaDataSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  MetaDataSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function validateMetaDataSection(section, tracker) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!equals(section.name.text, 'Metadata')) {
      return validationFailure(listOf(new ParseError("Expected a 'Metadata' but found '" + section.name.text + "'", getRow(section), getColumn(section))));
    }
    var errors = ArrayList_init();
    var items = ArrayList_init();
    tmp$ = section.args.iterator();
    while (tmp$.hasNext()) {
      var arg = tmp$.next();
      if (isReferenceGroup(arg.chalkTalkTarget)) {
        var validation = validateMetaDataItem(arg, tracker);
        if (Kotlin.isType(validation, ValidationSuccess))
          items.add_11rb$(validation.value);
        else if (Kotlin.isType(validation, ValidationFailure))
          errors.addAll_brywnq$(validation.errors);
        else
          Kotlin.noWhenBranchMatched();
      }
       else if (isSingleSectionGroup(arg.chalkTalkTarget)) {
        var group = Kotlin.isType(tmp$_0 = arg.chalkTalkTarget, Group) ? tmp$_0 : throwCCE();
        var sect = group.sections.get_za3lpa$(0);
        var name = sect.name.text;
        if (META_DATA_ITEM_CONSTRAINTS.containsKey_11rb$(name)) {
          var expectedCount = ensureNotNull(META_DATA_ITEM_CONSTRAINTS.get_11rb$(name));
          if (expectedCount >= 0 && sect.args.size !== expectedCount) {
            errors.add_11rb$(new ParseError('Expected ' + expectedCount + ' arguments for ' + ('section ' + name + ' but found ' + sect.args.size), getRow(sect), getColumn(sect)));
          }
          var values = ArrayList_init();
          tmp$_1 = sect.args.iterator();
          while (tmp$_1.hasNext()) {
            var a = tmp$_1.next();
            if (Kotlin.isType(a.chalkTalkTarget, Phase1Token) && a.chalkTalkTarget.type === ChalkTalkTokenType$String_getInstance()) {
              values.add_11rb$(a.chalkTalkTarget.text);
            }
             else {
              errors.add_11rb$(new ParseError('Expected a string but found ' + a.chalkTalkTarget, getRow(a.chalkTalkTarget), getColumn(a.chalkTalkTarget)));
            }
          }
          var location = new Location(getRow(sect), getColumn(sect));
          var s = new StringSection(name, values);
          tracker.setLocationOf_y4beru$(s, location);
          var res = new StringSectionGroup(s);
          tracker.setLocationOf_y4beru$(res, location);
          items.add_11rb$(res);
        }
         else {
          errors.add_11rb$(new ParseError('Expected a section with one of ' + ('the names ' + META_DATA_ITEM_CONSTRAINTS.keys), getRow(arg), getColumn(arg)));
        }
      }
       else {
        errors.add_11rb$(new ParseError("Unexpected item '" + arg.toCode() + "'", getRow(arg), getColumn(arg)));
      }
    }
    if (!errors.isEmpty()) {
      tmp$_2 = validationFailure(errors);
    }
     else {
      tmp$_2 = validationSuccess_0(tracker, section, new MetaDataSection(items));
    }
    return tmp$_2;
  }
  function validateMetaDataItem(arg, tracker) {
    if (!Kotlin.isType(arg.chalkTalkTarget, Group)) {
      return validationFailure(listOf(new ParseError('Expected a group', getRow(arg), getColumn(arg))));
    }
    return validateReferenceGroup(arg.chalkTalkTarget, tracker);
  }
  function OffsetItemSection(offset) {
    this.offset = offset;
  }
  OffsetItemSection.prototype.forEach_s8izwl$ = function (fn) {
  };
  OffsetItemSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return indentedStringSection(writer, isArg, indent, 'offset', this.offset);
  };
  OffsetItemSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  OffsetItemSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OffsetItemSection',
    interfaces: [Phase2Node]
  };
  OffsetItemSection.prototype.component1 = function () {
    return this.offset;
  };
  OffsetItemSection.prototype.copy_61zpoe$ = function (offset) {
    return new OffsetItemSection(offset === void 0 ? this.offset : offset);
  };
  OffsetItemSection.prototype.toString = function () {
    return 'OffsetItemSection(offset=' + Kotlin.toString(this.offset) + ')';
  };
  OffsetItemSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  OffsetItemSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.offset, other.offset))));
  };
  function PageItemSection(page) {
    this.page = page;
  }
  PageItemSection.prototype.forEach_s8izwl$ = function (fn) {
  };
  PageItemSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return indentedStringSection(writer, isArg, indent, 'page', this.page);
  };
  PageItemSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  PageItemSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageItemSection',
    interfaces: [Phase2Node]
  };
  PageItemSection.prototype.component1 = function () {
    return this.page;
  };
  PageItemSection.prototype.copy_61zpoe$ = function (page) {
    return new PageItemSection(page === void 0 ? this.page : page);
  };
  PageItemSection.prototype.toString = function () {
    return 'PageItemSection(page=' + Kotlin.toString(this.page) + ')';
  };
  PageItemSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  PageItemSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.page, other.page))));
  };
  function ReferenceSection(sourceItems) {
    this.sourceItems = sourceItems;
  }
  ReferenceSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.sourceItems.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  ReferenceSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var tmp$;
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('reference');
    tmp$ = this.sourceItems.iterator();
    while (tmp$.hasNext()) {
      var sourceItem = tmp$.next();
      writer.writeNewline_za3lpa$();
      writer.append_v8axul$(sourceItem, true, indent + 2 | 0);
    }
    return writer;
  };
  ReferenceSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.sourceItems;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = chalkTransformer(item), SourceItemGroup) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new ReferenceSection(destination));
  };
  ReferenceSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReferenceSection',
    interfaces: [Phase2Node]
  };
  ReferenceSection.prototype.component1 = function () {
    return this.sourceItems;
  };
  ReferenceSection.prototype.copy_f2i619$ = function (sourceItems) {
    return new ReferenceSection(sourceItems === void 0 ? this.sourceItems : sourceItems);
  };
  ReferenceSection.prototype.toString = function () {
    return 'ReferenceSection(sourceItems=' + Kotlin.toString(this.sourceItems) + ')';
  };
  ReferenceSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sourceItems) | 0;
    return result;
  };
  ReferenceSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.sourceItems, other.sourceItems))));
  };
  function SourceItemSection(sourceReference) {
    this.sourceReference = sourceReference;
  }
  SourceItemSection.prototype.forEach_s8izwl$ = function (fn) {
  };
  SourceItemSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return indentedStringSection(writer, isArg, indent, 'source', this.sourceReference);
  };
  SourceItemSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  SourceItemSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SourceItemSection',
    interfaces: [Phase2Node]
  };
  SourceItemSection.prototype.component1 = function () {
    return this.sourceReference;
  };
  SourceItemSection.prototype.copy_61zpoe$ = function (sourceReference) {
    return new SourceItemSection(sourceReference === void 0 ? this.sourceReference : sourceReference);
  };
  SourceItemSection.prototype.toString = function () {
    return 'SourceItemSection(sourceReference=' + Kotlin.toString(this.sourceReference) + ')';
  };
  SourceItemSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sourceReference) | 0;
    return result;
  };
  SourceItemSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.sourceReference, other.sourceReference))));
  };
  function StringSection(name, values) {
    this.name = name;
    this.values = values;
  }
  StringSection.prototype.forEach_s8izwl$ = function (fn) {
  };
  StringSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var tmp$;
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$(this.name);
    if (this.values.size === 1) {
      writer.writeSpace();
      writer.writeText_61zpoe$(removeSurrounding(this.values.get_za3lpa$(0), '"', '"'));
    }
     else {
      tmp$ = this.values.iterator();
      while (tmp$.hasNext()) {
        var value = tmp$.next();
        writer.writeNewline_za3lpa$();
        writer.writeIndent_eltk6l$(true, indent + 2 | 0);
        writer.writeText_61zpoe$(removeSurrounding(value, '"', '"'));
      }
    }
    return writer;
  };
  StringSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  StringSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringSection',
    interfaces: [Phase2Node]
  };
  function AliasSection(mappings) {
    this.mappings = mappings;
  }
  AliasSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.mappings.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  AliasSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var tmp$;
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Alias');
    writer.writeNewline_za3lpa$();
    tmp$ = this.mappings;
    for (var i = 0; i !== tmp$.size; ++i) {
      writer.append_v8axul$(this.mappings.get_za3lpa$(i), true, indent + 2 | 0);
      if (i !== (this.mappings.size - 1 | 0)) {
        writer.writeNewline_za3lpa$();
      }
    }
    return writer;
  };
  AliasSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.mappings;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), MappingNode) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new AliasSection(destination));
  };
  AliasSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AliasSection',
    interfaces: [Phase2Node]
  };
  AliasSection.prototype.component1 = function () {
    return this.mappings;
  };
  AliasSection.prototype.copy_94f8jn$ = function (mappings) {
    return new AliasSection(mappings === void 0 ? this.mappings : mappings);
  };
  AliasSection.prototype.toString = function () {
    return 'AliasSection(mappings=' + Kotlin.toString(this.mappings) + ')';
  };
  AliasSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mappings) | 0;
    return result;
  };
  AliasSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.mappings, other.mappings))));
  };
  function validateAliasSection(section, tracker) {
    var tmp$, tmp$_0;
    if (!equals(section.name.text, 'Alias')) {
      return validationFailure(listOf(new ParseError("Expected a 'Alias' but found '" + section.name.text + "'", getRow(section), getColumn(section))));
    }
    var errors = ArrayList_init();
    var mappings = ArrayList_init();
    tmp$ = section.args.iterator();
    while (tmp$.hasNext()) {
      var arg = tmp$.next();
      var validation = validateMappingNode(arg, tracker);
      if (Kotlin.isType(validation, ValidationSuccess))
        mappings.add_11rb$(validation.value);
      else if (Kotlin.isType(validation, ValidationFailure))
        errors.addAll_brywnq$(validation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    if (!errors.isEmpty()) {
      tmp$_0 = validationFailure(errors);
    }
     else {
      tmp$_0 = validationSuccess_0(tracker, section, new AliasSection(mappings));
    }
    return tmp$_0;
  }
  function AsSection(clauses) {
    this.clauses = clauses;
  }
  AsSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  AsSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('as');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  AsSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new AsSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  AsSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsSection',
    interfaces: [Phase2Node]
  };
  AsSection.prototype.component1 = function () {
    return this.clauses;
  };
  AsSection.prototype.copy_bln7jj$ = function (clauses) {
    return new AsSection(clauses === void 0 ? this.clauses : clauses);
  };
  AsSection.prototype.toString = function () {
    return 'AsSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  AsSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  AsSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateAsSection(node, tracker) {
    return validateClauseList(tracker, node, 'as', false, getCallableRef('AsSection', function (clauses) {
      return new AsSection(clauses);
    }));
  }
  function AssumingSection(clauses) {
    this.clauses = clauses;
  }
  AssumingSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  AssumingSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('assuming');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  AssumingSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new AssumingSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  AssumingSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssumingSection',
    interfaces: [Phase2Node]
  };
  AssumingSection.prototype.component1 = function () {
    return this.clauses;
  };
  AssumingSection.prototype.copy_bln7jj$ = function (clauses) {
    return new AssumingSection(clauses === void 0 ? this.clauses : clauses);
  };
  AssumingSection.prototype.toString = function () {
    return 'AssumingSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  AssumingSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  AssumingSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateAssumingSection(node, tracker) {
    return validateClauseList(tracker, node, 'assuming', false, getCallableRef('AssumingSection', function (clauses) {
      return new AssumingSection(clauses);
    }));
  }
  function AxiomSection(clauses) {
    this.clauses = clauses;
  }
  AxiomSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  AxiomSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Axiom');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  AxiomSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new AxiomSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  AxiomSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxiomSection',
    interfaces: [Phase2Node]
  };
  AxiomSection.prototype.component1 = function () {
    return this.clauses;
  };
  AxiomSection.prototype.copy_bln7jj$ = function (clauses) {
    return new AxiomSection(clauses === void 0 ? this.clauses : clauses);
  };
  AxiomSection.prototype.toString = function () {
    return 'AxiomSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  AxiomSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  AxiomSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateAxiomSection(node, tracker) {
    return validateClauseList(tracker, node, 'Axiom', false, getCallableRef('AxiomSection', function (clauses) {
      return new AxiomSection(clauses);
    }));
  }
  function ConjectureSection(clauses) {
    this.clauses = clauses;
  }
  ConjectureSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  ConjectureSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Conjecture');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  ConjectureSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new ConjectureSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  ConjectureSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConjectureSection',
    interfaces: [Phase2Node]
  };
  ConjectureSection.prototype.component1 = function () {
    return this.clauses;
  };
  ConjectureSection.prototype.copy_bln7jj$ = function (clauses) {
    return new ConjectureSection(clauses === void 0 ? this.clauses : clauses);
  };
  ConjectureSection.prototype.toString = function () {
    return 'ConjectureSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  ConjectureSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  ConjectureSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateConjectureSection(node, tracker) {
    return validateClauseList(tracker, node, 'Conjecture', false, getCallableRef('ConjectureSection', function (clauses) {
      return new ConjectureSection(clauses);
    }));
  }
  function DefinesSection(targets) {
    this.targets = targets;
  }
  DefinesSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.targets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  DefinesSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Defines');
    appendTargetArgs(writer, this.targets, indent + 2 | 0);
    return writer;
  };
  DefinesSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.targets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), Target) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new DefinesSection(destination));
  };
  DefinesSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefinesSection',
    interfaces: [Phase2Node]
  };
  DefinesSection.prototype.component1 = function () {
    return this.targets;
  };
  DefinesSection.prototype.copy_jev4lk$ = function (targets) {
    return new DefinesSection(targets === void 0 ? this.targets : targets);
  };
  DefinesSection.prototype.toString = function () {
    return 'DefinesSection(targets=' + Kotlin.toString(this.targets) + ')';
  };
  DefinesSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.targets) | 0;
    return result;
  };
  DefinesSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.targets, other.targets))));
  };
  function validateDefinesSection(node, tracker) {
    return validateTargetList(tracker, node, 'Defines', getCallableRef('DefinesSection', function (targets) {
      return new DefinesSection(targets);
    }));
  }
  function ExistsSection(identifiers) {
    this.identifiers = identifiers;
  }
  ExistsSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.identifiers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  ExistsSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('exists');
    appendTargetArgs(writer, this.identifiers, indent + 2 | 0);
    return writer;
  };
  ExistsSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.identifiers;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), Target) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new ExistsSection(destination));
  };
  ExistsSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExistsSection',
    interfaces: [Phase2Node]
  };
  ExistsSection.prototype.component1 = function () {
    return this.identifiers;
  };
  ExistsSection.prototype.copy_jev4lk$ = function (identifiers) {
    return new ExistsSection(identifiers === void 0 ? this.identifiers : identifiers);
  };
  ExistsSection.prototype.toString = function () {
    return 'ExistsSection(identifiers=' + Kotlin.toString(this.identifiers) + ')';
  };
  ExistsSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.identifiers) | 0;
    return result;
  };
  ExistsSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.identifiers, other.identifiers))));
  };
  function validateExistsSection(node, tracker) {
    return validateTargetList(tracker, node, 'exists', getCallableRef('ExistsSection', function (identifiers) {
      return new ExistsSection(identifiers);
    }));
  }
  function ExpandsSection(targets) {
    this.targets = targets;
  }
  ExpandsSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.targets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  ExpandsSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('expands');
    appendTargetArgs(writer, this.targets, indent + 2 | 0);
    return writer;
  };
  ExpandsSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.targets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), AbstractionNode) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new ExpandsSection(destination));
  };
  ExpandsSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpandsSection',
    interfaces: [Phase2Node]
  };
  ExpandsSection.prototype.component1 = function () {
    return this.targets;
  };
  ExpandsSection.prototype.copy_vnbnf9$ = function (targets) {
    return new ExpandsSection(targets === void 0 ? this.targets : targets);
  };
  ExpandsSection.prototype.toString = function () {
    return 'ExpandsSection(targets=' + Kotlin.toString(this.targets) + ')';
  };
  ExpandsSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.targets) | 0;
    return result;
  };
  ExpandsSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.targets, other.targets))));
  };
  function PseudoExpandsSection(targets) {
    this.targets = targets;
  }
  PseudoExpandsSection.prototype.forEach_s8izwl$ = function (fn) {
    throw RuntimeException_init('PseudoExpandsSection.forEach() should never be invoked');
  };
  PseudoExpandsSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    throw RuntimeException_init('PseudoExpandsSection.toCode() should never be invoked');
  };
  PseudoExpandsSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    throw RuntimeException_init('PseudoExpandsSection.transform() should never be invoked');
  };
  PseudoExpandsSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PseudoExpandsSection',
    interfaces: [Phase2Node]
  };
  PseudoExpandsSection.prototype.component1 = function () {
    return this.targets;
  };
  PseudoExpandsSection.prototype.copy_jev4lk$ = function (targets) {
    return new PseudoExpandsSection(targets === void 0 ? this.targets : targets);
  };
  PseudoExpandsSection.prototype.toString = function () {
    return 'PseudoExpandsSection(targets=' + Kotlin.toString(this.targets) + ')';
  };
  PseudoExpandsSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.targets) | 0;
    return result;
  };
  PseudoExpandsSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.targets, other.targets))));
  };
  function isValidAbstraction(node) {
    return node.abstraction.subParams == null && node.abstraction.parts.size === 1 && node.abstraction.parts.get_za3lpa$(0).subParams == null && node.abstraction.parts.get_za3lpa$(0).params == null && (!node.abstraction.isEnclosed && endsWith(node.abstraction.parts.get_za3lpa$(0).name.text, '...') || (node.abstraction.isEnclosed && node.abstraction.isVarArgs && !endsWith(node.abstraction.parts.get_za3lpa$(0).name.text, '...')));
  }
  function validateExpandsSection(node, tracker) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var validation = validateTargetList(tracker, node, 'expands', getCallableRef('PseudoExpandsSection', function (targets) {
      return new PseudoExpandsSection(targets);
    }));
    if (Kotlin.isType(validation, ValidationFailure))
      return validationFailure(validation.errors);
    else if (Kotlin.isType(validation, ValidationSuccess)) {
      var newErrors = ArrayList_init();
      var targets = ArrayList_init();
      tmp$ = validation.value.targets.iterator();
      while (tmp$.hasNext()) {
        var target = tmp$.next();
        if (Kotlin.isType(target, AbstractionNode) && isValidAbstraction(target)) {
          tmp$_0 = target;
        }
         else {
          tmp$_0 = null;
        }
        var id = tmp$_0;
        if (id == null) {
          newErrors.add_11rb$(new ParseError("an 'expands' section can only contain <name>... or {<name>}...", (tmp$_2 = (tmp$_1 = tracker.getLocationOf_2v05ti$(target)) != null ? tmp$_1.row : null) != null ? tmp$_2 : -1, (tmp$_4 = (tmp$_3 = tracker.getLocationOf_2v05ti$(target)) != null ? tmp$_3.column : null) != null ? tmp$_4 : -1));
        }
         else {
          targets.add_11rb$(id);
        }
      }
      if (newErrors.isEmpty()) {
        return validationSuccess_0(tracker, node, new ExpandsSection(targets));
      }
       else {
        return validationFailure(newErrors);
      }
    }
     else
      return Kotlin.noWhenBranchMatched();
  }
  function ForSection(targets) {
    this.targets = targets;
  }
  ForSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.targets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  ForSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('for');
    appendTargetArgs(writer, this.targets, indent + 2 | 0);
    return writer;
  };
  ForSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.targets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), Target) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new ForSection(destination));
  };
  ForSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForSection',
    interfaces: [Phase2Node]
  };
  ForSection.prototype.component1 = function () {
    return this.targets;
  };
  ForSection.prototype.copy_jev4lk$ = function (targets) {
    return new ForSection(targets === void 0 ? this.targets : targets);
  };
  ForSection.prototype.toString = function () {
    return 'ForSection(targets=' + Kotlin.toString(this.targets) + ')';
  };
  ForSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.targets) | 0;
    return result;
  };
  ForSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.targets, other.targets))));
  };
  function validateForSection(node, tracker) {
    return validateTargetList(tracker, node, 'for', getCallableRef('ForSection', function (targets) {
      return new ForSection(targets);
    }));
  }
  function IfSection(clauses) {
    this.clauses = clauses;
  }
  IfSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  IfSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('if');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  IfSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new IfSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  IfSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IfSection',
    interfaces: [Phase2Node]
  };
  IfSection.prototype.component1 = function () {
    return this.clauses;
  };
  IfSection.prototype.copy_bln7jj$ = function (clauses) {
    return new IfSection(clauses === void 0 ? this.clauses : clauses);
  };
  IfSection.prototype.toString = function () {
    return 'IfSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  IfSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  IfSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateIfSection(node, tracker) {
    return validateClauseList(tracker, node, 'if', true, getCallableRef('IfSection', function (clauses) {
      return new IfSection(clauses);
    }));
  }
  function IffSection(clauses) {
    this.clauses = clauses;
  }
  IffSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  IffSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('iff');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  IffSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new IffSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  IffSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IffSection',
    interfaces: [Phase2Node]
  };
  IffSection.prototype.component1 = function () {
    return this.clauses;
  };
  IffSection.prototype.copy_bln7jj$ = function (clauses) {
    return new IffSection(clauses === void 0 ? this.clauses : clauses);
  };
  IffSection.prototype.toString = function () {
    return 'IffSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  IffSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  IffSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateIffSection(node, tracker) {
    return validateClauseList(tracker, node, 'iff', true, getCallableRef('IffSection', function (clauses) {
      return new IffSection(clauses);
    }));
  }
  function MeansSection(clauses) {
    this.clauses = clauses;
  }
  MeansSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  MeansSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('means');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  MeansSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new MeansSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  MeansSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeansSection',
    interfaces: [Phase2Node]
  };
  MeansSection.prototype.component1 = function () {
    return this.clauses;
  };
  MeansSection.prototype.copy_bln7jj$ = function (clauses) {
    return new MeansSection(clauses === void 0 ? this.clauses : clauses);
  };
  MeansSection.prototype.toString = function () {
    return 'MeansSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  MeansSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  MeansSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateMeansSection(node, tracker) {
    return validateClauseList(tracker, node, 'means', false, getCallableRef('MeansSection', function (clauses) {
      return new MeansSection(clauses);
    }));
  }
  function NotSection(clauses) {
    this.clauses = clauses;
  }
  NotSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  NotSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('not');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  NotSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new NotSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  NotSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotSection',
    interfaces: [Phase2Node]
  };
  NotSection.prototype.component1 = function () {
    return this.clauses;
  };
  NotSection.prototype.copy_bln7jj$ = function (clauses) {
    return new NotSection(clauses === void 0 ? this.clauses : clauses);
  };
  NotSection.prototype.toString = function () {
    return 'NotSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  NotSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  NotSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateNotSection(node, tracker) {
    return validateClauseList(tracker, node, 'not', false, getCallableRef('NotSection', function (clauses) {
      return new NotSection(clauses);
    }));
  }
  function OrSection(clauses) {
    this.clauses = clauses;
  }
  OrSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  OrSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('or');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  OrSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new OrSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  OrSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrSection',
    interfaces: [Phase2Node]
  };
  OrSection.prototype.component1 = function () {
    return this.clauses;
  };
  OrSection.prototype.copy_bln7jj$ = function (clauses) {
    return new OrSection(clauses === void 0 ? this.clauses : clauses);
  };
  OrSection.prototype.toString = function () {
    return 'OrSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  OrSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  OrSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateOrSection(node, tracker) {
    return validateClauseList(tracker, node, 'or', false, getCallableRef('OrSection', function (clauses) {
      return new OrSection(clauses);
    }));
  }
  function RefinesSection(targets) {
    this.targets = targets;
  }
  RefinesSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.targets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  RefinesSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Refines');
    appendTargetArgs(writer, this.targets, indent + 2 | 0);
    return writer;
  };
  RefinesSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var $receiver = this.targets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_ql661s$(chalkTransformer), Target) ? tmp$_0 : throwCCE());
    }
    return chalkTransformer(new RefinesSection(destination));
  };
  RefinesSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefinesSection',
    interfaces: [Phase2Node]
  };
  RefinesSection.prototype.component1 = function () {
    return this.targets;
  };
  RefinesSection.prototype.copy_jev4lk$ = function (targets) {
    return new RefinesSection(targets === void 0 ? this.targets : targets);
  };
  RefinesSection.prototype.toString = function () {
    return 'RefinesSection(targets=' + Kotlin.toString(this.targets) + ')';
  };
  RefinesSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.targets) | 0;
    return result;
  };
  RefinesSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.targets, other.targets))));
  };
  function validateRefinesSection(node, tracker) {
    return validateTargetList(tracker, node, 'Refines', getCallableRef('RefinesSection', function (targets) {
      return new RefinesSection(targets);
    }));
  }
  function RepresentsSection() {
  }
  RepresentsSection.prototype.forEach_s8izwl$ = function (fn) {
  };
  RepresentsSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Represents');
    return writer;
  };
  RepresentsSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  RepresentsSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RepresentsSection',
    interfaces: [Phase2Node]
  };
  function validateRepresentsSection(node, tracker) {
    var tmp$, tmp$_0;
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Section)) {
      errors.add_11rb$(new ParseError('Expected a RepresentsSection', getRow(node), getColumn(node)));
    }
    var sect = Kotlin.isType(tmp$ = node, Section) ? tmp$ : throwCCE();
    if (!sect.args.isEmpty()) {
      errors.add_11rb$(new ParseError('A Represents cannot have any arguments', getRow(node), getColumn(node)));
    }
    if (!equals(sect.name.text, 'Represents')) {
      errors.add_11rb$(new ParseError('Expected a section named Represents', getRow(node), getColumn(node)));
    }
    if (!errors.isEmpty()) {
      tmp$_0 = validationFailure(errors);
    }
     else {
      tmp$_0 = validationSuccess_0(tracker, node, new RepresentsSection());
    }
    return tmp$_0;
  }
  function ResourceSection(items) {
    SourceSection.call(this, items);
    this.items_5bbp9z$_0 = items;
  }
  Object.defineProperty(ResourceSection.prototype, 'items', {
    get: function () {
      return this.items_5bbp9z$_0;
    }
  });
  ResourceSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.items.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  ResourceSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var tmp$;
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Resource');
    writer.writeNewline_za3lpa$();
    tmp$ = this.items;
    for (var i = 0; i !== tmp$.size; ++i) {
      writer.append_v8axul$(this.items.get_za3lpa$(i), true, indent + 2 | 0);
      if (i !== (this.items.size - 1 | 0)) {
        writer.writeNewline_za3lpa$();
      }
    }
    return writer;
  };
  ResourceSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  ResourceSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResourceSection',
    interfaces: [SourceSection]
  };
  function validateResourceSection(section, tracker) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!equals(section.name.text, 'Resource')) {
      return validationFailure(listOf(new ParseError("Expected a 'Resource' but found '" + section.name.text + "'", getRow(section), getColumn(section))));
    }
    var errors = ArrayList_init();
    var items = ArrayList_init();
    tmp$ = section.args.iterator();
    while (tmp$.hasNext()) {
      var arg = tmp$.next();
      if (isSingleSectionGroup(arg.chalkTalkTarget)) {
        var group = Kotlin.isType(tmp$_0 = arg.chalkTalkTarget, Group) ? tmp$_0 : throwCCE();
        var sect = group.sections.get_za3lpa$(0);
        var name = sect.name.text;
        if (SOURCE_ITEM_CONSTRAINTS.containsKey_11rb$(name)) {
          var expectedCount = ensureNotNull(SOURCE_ITEM_CONSTRAINTS.get_11rb$(name));
          if (expectedCount >= 0 && sect.args.size !== expectedCount) {
            errors.add_11rb$(new ParseError('Expected ' + expectedCount + ' arguments for ' + ('section ' + name + ' but found ' + sect.args.size), getRow(sect), getColumn(sect)));
          }
           else if (expectedCount < 0 && sect.args.size < (-expectedCount | 0)) {
            errors.add_11rb$(new ParseError('Expected at least ' + (-expectedCount | 0) + ' arguments for ' + ('section ' + name + ' but found ' + sect.args.size), getRow(sect), getColumn(sect)));
          }
          var values = ArrayList_init();
          tmp$_1 = sect.args.iterator();
          while (tmp$_1.hasNext()) {
            var a = tmp$_1.next();
            if (Kotlin.isType(a.chalkTalkTarget, Phase1Token) && a.chalkTalkTarget.type === ChalkTalkTokenType$String_getInstance()) {
              values.add_11rb$(a.chalkTalkTarget.text);
            }
             else {
              errors.add_11rb$(new ParseError('Expected a string but found ' + a.chalkTalkTarget, getRow(a.chalkTalkTarget), getColumn(a.chalkTalkTarget)));
            }
          }
          var location = new Location(getRow(arg), getColumn(arg));
          var s = new StringSection(name, values);
          tracker.setLocationOf_y4beru$(s, location);
          var res = new StringSectionGroup(s);
          tracker.setLocationOf_y4beru$(res, location);
          items.add_11rb$(res);
        }
         else {
          errors.add_11rb$(new ParseError('Expected a section with one of ' + ('the names ' + SOURCE_ITEM_CONSTRAINTS.keys), getRow(arg), getColumn(arg)));
        }
      }
       else {
        errors.add_11rb$(new ParseError("Unexpected item '" + arg.toCode() + "'", getRow(arg), getColumn(arg)));
      }
    }
    if (!errors.isEmpty()) {
      tmp$_2 = validationFailure(errors);
    }
     else {
      tmp$_2 = validationSuccess_0(tracker, section, new ResourceSection(items));
    }
    return tmp$_2;
  }
  function identifySections(sections, expected) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var patternBuilder = StringBuilder_init();
    for (tmp$ = 0; tmp$ !== expected.length; ++tmp$) {
      var name = expected[tmp$];
      patternBuilder.append_gw00v9$(name);
      patternBuilder.append_gw00v9$(':\n');
    }
    var pattern = patternBuilder.toString();
    var sectionQueue = newQueue();
    tmp$_0 = sections.iterator();
    while (tmp$_0.hasNext()) {
      var s = tmp$_0.next();
      sectionQueue.offer_11rb$(s);
    }
    var expectedQueue = newQueue();
    for (tmp$_1 = 0; tmp$_1 !== expected.length; ++tmp$_1) {
      var e = expected[tmp$_1];
      expectedQueue.offer_11rb$(e);
    }
    var result = LinkedHashMap_init();
    while (!sectionQueue.isEmpty() && !expectedQueue.isEmpty()) {
      var nextSection = sectionQueue.peek();
      var maybeName = expectedQueue.peek();
      var isOptional = endsWith(maybeName, '?');
      var tmp$_4;
      if (isOptional) {
        var endIndex = maybeName.length - 1 | 0;
        tmp$_4 = maybeName.substring(0, endIndex);
      }
       else
        tmp$_4 = maybeName;
      var trueName = tmp$_4;
      if (equals(nextSection.name.text, trueName)) {
        if (!result.containsKey_11rb$(trueName)) {
          var value = ArrayList_init();
          result.put_xwzc9p$(trueName, value);
        }
        ensureNotNull(result.get_11rb$(trueName)).add_11rb$(nextSection);
        sectionQueue.poll();
        expectedQueue.poll();
        while (!sectionQueue.isEmpty() && equals(sectionQueue.peek().name.text, trueName)) {
          ensureNotNull(result.get_11rb$(trueName)).add_11rb$(sectionQueue.poll());
        }
      }
       else if (isOptional) {
        expectedQueue.poll();
      }
       else {
        throw new ParseError('For pattern:\n\n' + pattern + "\nExpected '" + trueName + "' but found '" + nextSection.name.text + "'", getRow(nextSection), getColumn(nextSection));
      }
    }
    if (!sectionQueue.isEmpty()) {
      var peek = sectionQueue.peek();
      throw new ParseError('For pattern:\n\n' + pattern + "\nUnexpected Section '" + peek.name.text + "'", getRow(peek), getColumn(peek));
    }
    var nextExpected = null;
    tmp$_2 = expectedQueue.iterator();
    while (tmp$_2.hasNext()) {
      var exp = tmp$_2.next();
      if (!endsWith(exp, '?')) {
        nextExpected = exp;
        break;
      }
    }
    var startRow = -1;
    var startColumn = -1;
    if (!sections.isEmpty()) {
      var sect = sections.get_za3lpa$(0);
      startRow = getRow(sect);
      startColumn = getColumn(sect);
    }
    if (nextExpected != null) {
      throw new ParseError('For pattern:\n\n' + pattern + '\nExpected a ' + nextExpected, startRow, startColumn);
    }
    var reversedResult = LinkedHashMap_init();
    tmp$_3 = result.keys.iterator();
    while (tmp$_3.hasNext()) {
      var key = tmp$_3.next();
      var value_0 = reversed(ensureNotNull(result.get_11rb$(key)));
      reversedResult.put_xwzc9p$(key, value_0);
    }
    return reversedResult;
  }
  function canBeOnOneLine(target) {
    return Kotlin.isType(target, Identifier) || Kotlin.isType(target, TupleNode) || Kotlin.isType(target, AbstractionNode) || Kotlin.isType(target, AssignmentNode);
  }
  function appendTargetArgs(writer, targets, indent) {
    var tmp$, tmp$_0;
    var i = 0;
    while (i < targets.size) {
      var lineItems = ArrayList_init();
      while (i < targets.size && canBeOnOneLine(targets.get_za3lpa$(i))) {
        lineItems.add_11rb$(targets.get_za3lpa$((tmp$ = i, i = tmp$ + 1 | 0, tmp$)));
      }
      if (lineItems.isEmpty()) {
        writer.writeNewline_za3lpa$();
        writer.append_v8axul$(targets.get_za3lpa$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0)), true, indent);
      }
       else {
        writer.writeSpace();
        for (var j = 0; j !== lineItems.size; ++j) {
          writer.append_v8axul$(lineItems.get_za3lpa$(j), false, 0);
          if (j !== (lineItems.size - 1 | 0)) {
            writer.writeComma();
            writer.writeSpace();
          }
        }
      }
    }
  }
  var SOURCE_ITEM_CONSTRAINTS;
  function SourceSection(items) {
    this.items_yghldw$_0 = items;
  }
  Object.defineProperty(SourceSection.prototype, 'items', {
    get: function () {
      return this.items_yghldw$_0;
    }
  });
  SourceSection.prototype.forEach_s8izwl$ = function (fn) {
    var tmp$;
    tmp$ = this.items.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  SourceSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var tmp$;
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Source');
    writer.writeNewline_za3lpa$();
    tmp$ = this.items;
    for (var i = 0; i !== tmp$.size; ++i) {
      writer.append_v8axul$(this.items.get_za3lpa$(i), true, indent + 2 | 0);
      if (i !== (this.items.size - 1 | 0)) {
        writer.writeNewline_za3lpa$();
      }
    }
    return writer;
  };
  SourceSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  SourceSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SourceSection',
    interfaces: [Phase2Node]
  };
  function validateSourceSection(section, tracker) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!equals(section.name.text, 'Source')) {
      return validationFailure(listOf(new ParseError("Expected a 'Source' but found '" + section.name.text + "'", getRow(section), getColumn(section))));
    }
    var errors = ArrayList_init();
    var items = ArrayList_init();
    tmp$ = section.args.iterator();
    while (tmp$.hasNext()) {
      var arg = tmp$.next();
      if (isSingleSectionGroup(arg.chalkTalkTarget)) {
        var group = Kotlin.isType(tmp$_0 = arg.chalkTalkTarget, Group) ? tmp$_0 : throwCCE();
        var sect = group.sections.get_za3lpa$(0);
        var name = sect.name.text;
        if (SOURCE_ITEM_CONSTRAINTS.containsKey_11rb$(name)) {
          var expectedCount = ensureNotNull(SOURCE_ITEM_CONSTRAINTS.get_11rb$(name));
          if (expectedCount >= 0 && sect.args.size !== expectedCount) {
            errors.add_11rb$(new ParseError('Expected ' + expectedCount + ' arguments for ' + ('section ' + name + ' but found ' + sect.args.size), getRow(sect), getColumn(sect)));
          }
           else if (expectedCount < 0 && sect.args.size < (-expectedCount | 0)) {
            errors.add_11rb$(new ParseError('Expected at least ' + (-expectedCount | 0) + ' arguments for ' + ('section ' + name + ' but found ' + sect.args.size), getRow(sect), getColumn(sect)));
          }
          var values = ArrayList_init();
          tmp$_1 = sect.args.iterator();
          while (tmp$_1.hasNext()) {
            var a = tmp$_1.next();
            if (Kotlin.isType(a.chalkTalkTarget, Phase1Token) && a.chalkTalkTarget.type === ChalkTalkTokenType$String_getInstance()) {
              values.add_11rb$(a.chalkTalkTarget.text);
            }
             else {
              errors.add_11rb$(new ParseError('Expected a string but found ' + a.chalkTalkTarget, getRow(a.chalkTalkTarget), getColumn(a.chalkTalkTarget)));
            }
          }
          var location = new Location(getRow(arg), getColumn(arg));
          var s = new StringSection(name, values);
          tracker.setLocationOf_y4beru$(s, location);
          var res = new StringSectionGroup(s);
          tracker.setLocationOf_y4beru$(res, location);
          items.add_11rb$(res);
        }
         else {
          errors.add_11rb$(new ParseError('Expected a section with one of ' + ('the names ' + SOURCE_ITEM_CONSTRAINTS.keys), getRow(arg), getColumn(arg)));
        }
      }
       else {
        errors.add_11rb$(new ParseError("Unexpected item '" + arg.toCode() + "'", getRow(arg), getColumn(arg)));
      }
    }
    if (!errors.isEmpty()) {
      tmp$_2 = validationFailure(errors);
    }
     else {
      tmp$_2 = validationSuccess_0(tracker, section, new SourceSection(items));
    }
    return tmp$_2;
  }
  function SuchThatSection(clauses) {
    this.clauses = clauses;
  }
  SuchThatSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  SuchThatSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('suchThat');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  SuchThatSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new SuchThatSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  SuchThatSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuchThatSection',
    interfaces: [Phase2Node]
  };
  SuchThatSection.prototype.component1 = function () {
    return this.clauses;
  };
  SuchThatSection.prototype.copy_bln7jj$ = function (clauses) {
    return new SuchThatSection(clauses === void 0 ? this.clauses : clauses);
  };
  SuchThatSection.prototype.toString = function () {
    return 'SuchThatSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  SuchThatSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  SuchThatSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateSuchThatSection(node, tracker) {
    return validateClauseList(tracker, node, 'suchThat', false, getCallableRef('SuchThatSection', function (clauses) {
      return new SuchThatSection(clauses);
    }));
  }
  function TextSection(name, text) {
    this.name = name;
    this.text = text;
  }
  TextSection.prototype.forEach_s8izwl$ = function (fn) {
  };
  TextSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$(this.name);
    writer.writeNewline_za3lpa$();
    writer.writeIndent_eltk6l$(true, indent + 2 | 0);
    writer.writeDirect_61zpoe$(this.text);
    return writer;
  };
  TextSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    return chalkTransformer(this);
  };
  TextSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextSection',
    interfaces: [Phase2Node]
  };
  TextSection.prototype.component1 = function () {
    return this.name;
  };
  TextSection.prototype.component2 = function () {
    return this.text;
  };
  TextSection.prototype.copy_puj7f4$ = function (name, text) {
    return new TextSection(name === void 0 ? this.name : name, text === void 0 ? this.text : text);
  };
  TextSection.prototype.toString = function () {
    return 'TextSection(name=' + Kotlin.toString(this.name) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  TextSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  TextSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.text, other.text)))));
  };
  function validateTextSection(rawNode, name, tracker) {
    var tmp$, tmp$_0, tmp$_1;
    var node = rawNode.resolve();
    var row = getRow(node);
    var column = getColumn(node);
    var errors = ArrayList_init();
    if (!Kotlin.isType(node, Section)) {
      errors.add_11rb$(new ParseError('Expected a Section', getRow(node), getColumn(node)));
    }
    var sect = Kotlin.isType(tmp$ = node, Section) ? tmp$ : throwCCE();
    if (!equals(sect.name.text, name)) {
      errors.add_11rb$(new ParseError('Expected a Section with name ' + name + ' but found ' + sect.name.text, row, column));
    }
    if (sect.args.size !== 1) {
      errors.add_11rb$(new ParseError("Section '" + sect.name.text + "' requires exactly one text argument.", row, column));
      return validationFailure(errors);
    }
    var arg = sect.args.get_za3lpa$(0).chalkTalkTarget;
    if (!Kotlin.isType(arg, Phase1Token)) {
      errors.add_11rb$(new ParseError('Expected a string but found ' + arg.toCode(), row, column));
    }
    if (!errors.isEmpty()) {
      tmp$_1 = validationFailure(errors);
    }
     else {
      tmp$_1 = validationSuccess_0(tracker, rawNode, new TextSection(name, (Kotlin.isType(tmp$_0 = arg, Phase1Token) ? tmp$_0 : throwCCE()).text));
    }
    return tmp$_1;
  }
  function ThatSection(clauses) {
    this.clauses = clauses;
  }
  ThatSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  ThatSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('that');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  ThatSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new ThatSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  ThatSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThatSection',
    interfaces: [Phase2Node]
  };
  ThatSection.prototype.component1 = function () {
    return this.clauses;
  };
  ThatSection.prototype.copy_bln7jj$ = function (clauses) {
    return new ThatSection(clauses === void 0 ? this.clauses : clauses);
  };
  ThatSection.prototype.toString = function () {
    return 'ThatSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  ThatSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  ThatSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateThatSection(node, tracker) {
    return validateClauseList(tracker, node, 'that', false, getCallableRef('ThatSection', function (clauses) {
      return new ThatSection(clauses);
    }));
  }
  function ThenSection(clauses) {
    this.clauses = clauses;
  }
  ThenSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  ThenSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('then');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  ThenSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new ThenSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  ThenSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThenSection',
    interfaces: [Phase2Node]
  };
  ThenSection.prototype.component1 = function () {
    return this.clauses;
  };
  ThenSection.prototype.copy_bln7jj$ = function (clauses) {
    return new ThenSection(clauses === void 0 ? this.clauses : clauses);
  };
  ThenSection.prototype.toString = function () {
    return 'ThenSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  ThenSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  ThenSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateThenSection(node, tracker) {
    return validateClauseList(tracker, node, 'then', false, getCallableRef('ThenSection', function (clauses) {
      return new ThenSection(clauses);
    }));
  }
  function TheoremSection(clauses) {
    this.clauses = clauses;
  }
  TheoremSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  TheoremSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('Theorem');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  TheoremSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new TheoremSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  TheoremSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TheoremSection',
    interfaces: [Phase2Node]
  };
  TheoremSection.prototype.component1 = function () {
    return this.clauses;
  };
  TheoremSection.prototype.copy_bln7jj$ = function (clauses) {
    return new TheoremSection(clauses === void 0 ? this.clauses : clauses);
  };
  TheoremSection.prototype.toString = function () {
    return 'TheoremSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  TheoremSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  TheoremSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateTheoremSection(node, tracker) {
    return validateClauseList(tracker, node, 'Theorem', false, getCallableRef('TheoremSection', function (clauses) {
      return new TheoremSection(clauses);
    }));
  }
  function WhereSection(clauses) {
    this.clauses = clauses;
  }
  WhereSection.prototype.forEach_s8izwl$ = function (fn) {
    this.clauses.forEach_s8izwl$(fn);
  };
  WhereSection.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    writer.writeIndent_eltk6l$(isArg, indent);
    writer.writeHeader_61zpoe$('where');
    if (!this.clauses.clauses.isEmpty()) {
      writer.writeNewline_za3lpa$();
    }
    writer.append_v8axul$(this.clauses, true, indent + 2 | 0);
    return writer;
  };
  WhereSection.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$;
    return chalkTransformer(new WhereSection(Kotlin.isType(tmp$ = this.clauses.transform_ql661s$(chalkTransformer), ClauseListNode) ? tmp$ : throwCCE()));
  };
  WhereSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WhereSection',
    interfaces: [Phase2Node]
  };
  WhereSection.prototype.component1 = function () {
    return this.clauses;
  };
  WhereSection.prototype.copy_bln7jj$ = function (clauses) {
    return new WhereSection(clauses === void 0 ? this.clauses : clauses);
  };
  WhereSection.prototype.toString = function () {
    return 'WhereSection(clauses=' + Kotlin.toString(this.clauses) + ')';
  };
  WhereSection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clauses) | 0;
    return result;
  };
  WhereSection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clauses, other.clauses))));
  };
  function validateWhereSection(node, tracker) {
    return validateClauseList(tracker, node, 'where', false, getCallableRef('WhereSection', function (clauses) {
      return new WhereSection(clauses);
    }));
  }
  function AxiomGroup(axiomSection, aliasSection, metaDataSection) {
    TopLevelGroup.call(this, metaDataSection);
    this.axiomSection = axiomSection;
    this.aliasSection = aliasSection;
    this.metaDataSection_x8zesh$_0 = metaDataSection;
  }
  Object.defineProperty(AxiomGroup.prototype, 'metaDataSection', {
    get: function () {
      return this.metaDataSection_x8zesh$_0;
    }
  });
  AxiomGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.axiomSection);
    if (this.metaDataSection != null) {
      fn(this.metaDataSection);
    }
  };
  AxiomGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return topLevelToCode(writer, isArg, indent, null, [this.axiomSection, this.metaDataSection]);
  };
  AxiomGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return chalkTransformer(new AxiomGroup(Kotlin.isType(tmp$ = this.axiomSection.transform_ql661s$(chalkTransformer), AxiomSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_1 = (tmp$_0 = this.aliasSection) != null ? tmp$_0.transform_ql661s$(chalkTransformer) : null, AliasSection) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_3 = (tmp$_2 = this.metaDataSection) != null ? tmp$_2.transform_ql661s$(chalkTransformer) : null, MetaDataSection) ? tmp$_3 : throwCCE()));
  };
  AxiomGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxiomGroup',
    interfaces: [TopLevelGroup]
  };
  AxiomGroup.prototype.component1 = function () {
    return this.axiomSection;
  };
  AxiomGroup.prototype.component2 = function () {
    return this.aliasSection;
  };
  AxiomGroup.prototype.component3 = function () {
    return this.metaDataSection;
  };
  AxiomGroup.prototype.copy_n1u9md$ = function (axiomSection, aliasSection, metaDataSection) {
    return new AxiomGroup(axiomSection === void 0 ? this.axiomSection : axiomSection, aliasSection === void 0 ? this.aliasSection : aliasSection, metaDataSection === void 0 ? this.metaDataSection : metaDataSection);
  };
  AxiomGroup.prototype.toString = function () {
    return 'AxiomGroup(axiomSection=' + Kotlin.toString(this.axiomSection) + (', aliasSection=' + Kotlin.toString(this.aliasSection)) + (', metaDataSection=' + Kotlin.toString(this.metaDataSection)) + ')';
  };
  AxiomGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.axiomSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.aliasSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.metaDataSection) | 0;
    return result;
  };
  AxiomGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.axiomSection, other.axiomSection) && Kotlin.equals(this.aliasSection, other.aliasSection) && Kotlin.equals(this.metaDataSection, other.metaDataSection)))));
  };
  function isAxiomGroup(node) {
    return firstSectionMatchesName(node, 'Axiom');
  }
  function validateAxiomGroup(groupNode, tracker) {
    return validateResultLikeGroup(tracker, groupNode, 'Axiom', getCallableRef('validateAxiomSection', function (node, tracker) {
      return validateAxiomSection(node, tracker);
    }), getCallableRef('AxiomGroup', function (axiomSection, aliasSection, metaDataSection) {
      return new AxiomGroup(axiomSection, aliasSection, metaDataSection);
    }));
  }
  function ConjectureGroup(conjectureSection, aliasSection, metaDataSection) {
    TopLevelGroup.call(this, metaDataSection);
    this.conjectureSection = conjectureSection;
    this.aliasSection = aliasSection;
    this.metaDataSection_fgi833$_0 = metaDataSection;
  }
  Object.defineProperty(ConjectureGroup.prototype, 'metaDataSection', {
    get: function () {
      return this.metaDataSection_fgi833$_0;
    }
  });
  ConjectureGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.conjectureSection);
    if (this.metaDataSection != null) {
      fn(this.metaDataSection);
    }
  };
  ConjectureGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return topLevelToCode(writer, isArg, indent, null, [this.conjectureSection, this.metaDataSection]);
  };
  ConjectureGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return chalkTransformer(new ConjectureGroup(Kotlin.isType(tmp$ = this.conjectureSection.transform_ql661s$(chalkTransformer), ConjectureSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_1 = (tmp$_0 = this.aliasSection) != null ? tmp$_0.transform_ql661s$(chalkTransformer) : null, AliasSection) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_3 = (tmp$_2 = this.metaDataSection) != null ? tmp$_2.transform_ql661s$(chalkTransformer) : null, MetaDataSection) ? tmp$_3 : throwCCE()));
  };
  ConjectureGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConjectureGroup',
    interfaces: [TopLevelGroup]
  };
  ConjectureGroup.prototype.component1 = function () {
    return this.conjectureSection;
  };
  ConjectureGroup.prototype.component2 = function () {
    return this.aliasSection;
  };
  ConjectureGroup.prototype.component3 = function () {
    return this.metaDataSection;
  };
  ConjectureGroup.prototype.copy_pbcma3$ = function (conjectureSection, aliasSection, metaDataSection) {
    return new ConjectureGroup(conjectureSection === void 0 ? this.conjectureSection : conjectureSection, aliasSection === void 0 ? this.aliasSection : aliasSection, metaDataSection === void 0 ? this.metaDataSection : metaDataSection);
  };
  ConjectureGroup.prototype.toString = function () {
    return 'ConjectureGroup(conjectureSection=' + Kotlin.toString(this.conjectureSection) + (', aliasSection=' + Kotlin.toString(this.aliasSection)) + (', metaDataSection=' + Kotlin.toString(this.metaDataSection)) + ')';
  };
  ConjectureGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.conjectureSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.aliasSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.metaDataSection) | 0;
    return result;
  };
  ConjectureGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.conjectureSection, other.conjectureSection) && Kotlin.equals(this.aliasSection, other.aliasSection) && Kotlin.equals(this.metaDataSection, other.metaDataSection)))));
  };
  function isConjectureGroup(node) {
    return firstSectionMatchesName(node, 'Conjecture');
  }
  function validateConjectureGroup(groupNode, tracker) {
    return validateResultLikeGroup(tracker, groupNode, 'Conjecture', getCallableRef('validateConjectureSection', function (node, tracker) {
      return validateConjectureSection(node, tracker);
    }), getCallableRef('ConjectureGroup', function (conjectureSection, aliasSection, metaDataSection) {
      return new ConjectureGroup(conjectureSection, aliasSection, metaDataSection);
    }));
  }
  function DefinesGroup(signature, id, definesSection, assumingSection, meansSections, aliasSection, metaDataSection) {
    TopLevelGroup.call(this, metaDataSection);
    this.signature = signature;
    this.id = id;
    this.definesSection = definesSection;
    this.assumingSection = assumingSection;
    this.meansSections = meansSections;
    this.aliasSection = aliasSection;
    this.metaDataSection_kw9mif$_0 = metaDataSection;
  }
  Object.defineProperty(DefinesGroup.prototype, 'metaDataSection', {
    get: function () {
      return this.metaDataSection_kw9mif$_0;
    }
  });
  DefinesGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.id);
    fn(this.definesSection);
    if (this.assumingSection != null) {
      fn(this.assumingSection);
    }
    var tmp$;
    tmp$ = this.meansSections.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
    if (this.metaDataSection != null) {
      fn(this.metaDataSection);
    }
  };
  DefinesGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var sections = mutableListOf([this.definesSection, this.assumingSection]);
    sections.addAll_brywnq$(this.meansSections);
    sections.add_11rb$(this.metaDataSection);
    return topLevelToCode(writer, isArg, indent, this.id, copyToArray(sections).slice());
  };
  DefinesGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    tmp$ = this.signature;
    tmp$_1 = Kotlin.isType(tmp$_0 = this.id.transform_ql661s$(chalkTransformer), IdStatement) ? tmp$_0 : throwCCE();
    tmp$_3 = Kotlin.isType(tmp$_2 = this.definesSection.transform_ql661s$(chalkTransformer), DefinesSection) ? tmp$_2 : throwCCE();
    tmp$_6 = (tmp$_5 = (tmp$_4 = this.assumingSection) != null ? tmp$_4.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_5, AssumingSection) ? tmp$_5 : throwCCE();
    var $receiver = this.meansSections;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_11;
    tmp$_11 = $receiver.iterator();
    while (tmp$_11.hasNext()) {
      var item = tmp$_11.next();
      var tmp$_12;
      destination.add_11rb$(Kotlin.isType(tmp$_12 = chalkTransformer(item), MeansSection) ? tmp$_12 : throwCCE());
    }
    return chalkTransformer(new DefinesGroup(tmp$, tmp$_1, tmp$_3, tmp$_6, destination, (tmp$_8 = (tmp$_7 = this.aliasSection) != null ? tmp$_7.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_8, AliasSection) ? tmp$_8 : throwCCE(), (tmp$_10 = (tmp$_9 = this.metaDataSection) != null ? tmp$_9.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_10, MetaDataSection) ? tmp$_10 : throwCCE()));
  };
  DefinesGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefinesGroup',
    interfaces: [TopLevelGroup]
  };
  DefinesGroup.prototype.component1 = function () {
    return this.signature;
  };
  DefinesGroup.prototype.component2 = function () {
    return this.id;
  };
  DefinesGroup.prototype.component3 = function () {
    return this.definesSection;
  };
  DefinesGroup.prototype.component4 = function () {
    return this.assumingSection;
  };
  DefinesGroup.prototype.component5 = function () {
    return this.meansSections;
  };
  DefinesGroup.prototype.component6 = function () {
    return this.aliasSection;
  };
  DefinesGroup.prototype.component7 = function () {
    return this.metaDataSection;
  };
  DefinesGroup.prototype.copy_enqujh$ = function (signature, id, definesSection, assumingSection, meansSections, aliasSection, metaDataSection) {
    return new DefinesGroup(signature === void 0 ? this.signature : signature, id === void 0 ? this.id : id, definesSection === void 0 ? this.definesSection : definesSection, assumingSection === void 0 ? this.assumingSection : assumingSection, meansSections === void 0 ? this.meansSections : meansSections, aliasSection === void 0 ? this.aliasSection : aliasSection, metaDataSection === void 0 ? this.metaDataSection : metaDataSection);
  };
  DefinesGroup.prototype.toString = function () {
    return 'DefinesGroup(signature=' + Kotlin.toString(this.signature) + (', id=' + Kotlin.toString(this.id)) + (', definesSection=' + Kotlin.toString(this.definesSection)) + (', assumingSection=' + Kotlin.toString(this.assumingSection)) + (', meansSections=' + Kotlin.toString(this.meansSections)) + (', aliasSection=' + Kotlin.toString(this.aliasSection)) + (', metaDataSection=' + Kotlin.toString(this.metaDataSection)) + ')';
  };
  DefinesGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.signature) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.definesSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.assumingSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.meansSections) | 0;
    result = result * 31 + Kotlin.hashCode(this.aliasSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.metaDataSection) | 0;
    return result;
  };
  DefinesGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.signature, other.signature) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.definesSection, other.definesSection) && Kotlin.equals(this.assumingSection, other.assumingSection) && Kotlin.equals(this.meansSections, other.meansSections) && Kotlin.equals(this.aliasSection, other.aliasSection) && Kotlin.equals(this.metaDataSection, other.metaDataSection)))));
  };
  function isDefinesGroup(node) {
    return firstSectionMatchesName(node, 'Defines');
  }
  function validateDefinesGroup(groupNode, tracker) {
    return validateDefinesLikeGroup(tracker, groupNode, 'Defines', getCallableRef('validateDefinesSection', function (node, tracker) {
      return validateDefinesSection(node, tracker);
    }), 'means', getCallableRef('validateMeansSection', function (node, tracker) {
      return validateMeansSection(node, tracker);
    }), getCallableRef('DefinesGroup', function (signature, id, definesSection, assumingSection, meansSections, aliasSection, metaDataSection) {
      return new DefinesGroup(signature, id, definesSection, assumingSection, meansSections, aliasSection, metaDataSection);
    }));
  }
  function ProtoGroup(textSection, metaDataSection) {
    TopLevelGroup.call(this, metaDataSection);
    this.textSection = textSection;
    this.metaDataSection_r7ajo9$_0 = metaDataSection;
  }
  Object.defineProperty(ProtoGroup.prototype, 'metaDataSection', {
    get: function () {
      return this.metaDataSection_r7ajo9$_0;
    }
  });
  ProtoGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.textSection);
    if (this.metaDataSection != null) {
      fn(this.metaDataSection);
    }
  };
  ProtoGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return topLevelToCode(writer, isArg, indent, null, [this.textSection, this.metaDataSection]);
  };
  ProtoGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1;
    return chalkTransformer(new ProtoGroup(Kotlin.isType(tmp$ = this.textSection.transform_ql661s$(chalkTransformer), TextSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_1 = (tmp$_0 = this.metaDataSection) != null ? tmp$_0.transform_ql661s$(chalkTransformer) : null, MetaDataSection) ? tmp$_1 : null));
  };
  ProtoGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProtoGroup',
    interfaces: [TopLevelGroup]
  };
  function validateProtoGroup(groupNode, name, tracker) {
    var tmp$, tmp$_0;
    var errors = ArrayList_init();
    var group = groupNode.resolve();
    if (group.id != null) {
      errors.add_11rb$(new ParseError('A proto group cannot have an Id', getRow(group), getColumn(group)));
    }
    var sections = group.sections;
    var sectionMap;
    try {
      sectionMap = identifySections(sections, [name, 'Metadata?']);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var textSect = sectionMap.get_11rb$(name);
    var metadata = (tmp$ = sectionMap.get_11rb$('Metadata')) != null ? tmp$ : emptyList();
    if (textSect == null || textSect.size !== 1) {
      errors.add_11rb$(new ParseError('Expected a single section with name ' + name, getRow(group), getColumn(group)));
    }
    var textSection = null;
    var validation = validateTextSection(ensureNotNull(textSect).get_za3lpa$(0), name, tracker);
    if (Kotlin.isType(validation, ValidationSuccess))
      textSection = validation.value;
    else if (Kotlin.isType(validation, ValidationFailure))
      errors.addAll_brywnq$(validation.errors);
    else
      Kotlin.noWhenBranchMatched();
    var metaDataSection = null;
    if (!metadata.isEmpty()) {
      var metaDataValidation = validateMetaDataSection(metadata.get_za3lpa$(0), tracker);
      if (Kotlin.isType(metaDataValidation, ValidationSuccess))
        metaDataSection = metaDataValidation.value;
      else if (Kotlin.isType(metaDataValidation, ValidationFailure))
        errors.addAll_brywnq$(metaDataValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    if (!errors.isEmpty()) {
      tmp$_0 = validationFailure(errors);
    }
     else {
      tmp$_0 = validationSuccess_0(tracker, groupNode, new ProtoGroup(ensureNotNull(textSection), metaDataSection));
    }
    return tmp$_0;
  }
  function RepresentsGroup(signature, id, representsSection, assumingSection, thatSections, aliasSection, metaDataSection) {
    TopLevelGroup.call(this, metaDataSection);
    this.signature = signature;
    this.id = id;
    this.representsSection = representsSection;
    this.assumingSection = assumingSection;
    this.thatSections = thatSections;
    this.aliasSection = aliasSection;
    this.metaDataSection_v2ftq8$_0 = metaDataSection;
  }
  Object.defineProperty(RepresentsGroup.prototype, 'metaDataSection', {
    get: function () {
      return this.metaDataSection_v2ftq8$_0;
    }
  });
  RepresentsGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.id);
    fn(this.representsSection);
    if (this.assumingSection != null) {
      fn(this.assumingSection);
    }
    var tmp$;
    tmp$ = this.thatSections.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
    if (this.metaDataSection != null) {
      fn(this.metaDataSection);
    }
  };
  RepresentsGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    var sections = mutableListOf([this.representsSection, this.assumingSection]);
    sections.addAll_brywnq$(this.thatSections);
    sections.add_11rb$(this.metaDataSection);
    return topLevelToCode(writer, isArg, indent, this.id, copyToArray(sections).slice());
  };
  RepresentsGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    tmp$ = this.signature;
    tmp$_1 = Kotlin.isType(tmp$_0 = this.id.transform_ql661s$(chalkTransformer), IdStatement) ? tmp$_0 : throwCCE();
    tmp$_3 = Kotlin.isType(tmp$_2 = this.representsSection.transform_ql661s$(chalkTransformer), RepresentsSection) ? tmp$_2 : throwCCE();
    tmp$_6 = (tmp$_5 = (tmp$_4 = this.assumingSection) != null ? tmp$_4.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_5, AssumingSection) ? tmp$_5 : throwCCE();
    var $receiver = this.thatSections;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_11;
    tmp$_11 = $receiver.iterator();
    while (tmp$_11.hasNext()) {
      var item = tmp$_11.next();
      var tmp$_12;
      destination.add_11rb$(Kotlin.isType(tmp$_12 = chalkTransformer(item), ThatSection) ? tmp$_12 : throwCCE());
    }
    return chalkTransformer(new RepresentsGroup(tmp$, tmp$_1, tmp$_3, tmp$_6, destination, (tmp$_8 = (tmp$_7 = this.aliasSection) != null ? tmp$_7.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_8, AliasSection) ? tmp$_8 : throwCCE(), (tmp$_10 = (tmp$_9 = this.metaDataSection) != null ? tmp$_9.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_10, MetaDataSection) ? tmp$_10 : throwCCE()));
  };
  RepresentsGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RepresentsGroup',
    interfaces: [TopLevelGroup]
  };
  RepresentsGroup.prototype.component1 = function () {
    return this.signature;
  };
  RepresentsGroup.prototype.component2 = function () {
    return this.id;
  };
  RepresentsGroup.prototype.component3 = function () {
    return this.representsSection;
  };
  RepresentsGroup.prototype.component4 = function () {
    return this.assumingSection;
  };
  RepresentsGroup.prototype.component5 = function () {
    return this.thatSections;
  };
  RepresentsGroup.prototype.component6 = function () {
    return this.aliasSection;
  };
  RepresentsGroup.prototype.component7 = function () {
    return this.metaDataSection;
  };
  RepresentsGroup.prototype.copy_mryz0n$ = function (signature, id, representsSection, assumingSection, thatSections, aliasSection, metaDataSection) {
    return new RepresentsGroup(signature === void 0 ? this.signature : signature, id === void 0 ? this.id : id, representsSection === void 0 ? this.representsSection : representsSection, assumingSection === void 0 ? this.assumingSection : assumingSection, thatSections === void 0 ? this.thatSections : thatSections, aliasSection === void 0 ? this.aliasSection : aliasSection, metaDataSection === void 0 ? this.metaDataSection : metaDataSection);
  };
  RepresentsGroup.prototype.toString = function () {
    return 'RepresentsGroup(signature=' + Kotlin.toString(this.signature) + (', id=' + Kotlin.toString(this.id)) + (', representsSection=' + Kotlin.toString(this.representsSection)) + (', assumingSection=' + Kotlin.toString(this.assumingSection)) + (', thatSections=' + Kotlin.toString(this.thatSections)) + (', aliasSection=' + Kotlin.toString(this.aliasSection)) + (', metaDataSection=' + Kotlin.toString(this.metaDataSection)) + ')';
  };
  RepresentsGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.signature) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.representsSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.assumingSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.thatSections) | 0;
    result = result * 31 + Kotlin.hashCode(this.aliasSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.metaDataSection) | 0;
    return result;
  };
  RepresentsGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.signature, other.signature) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.representsSection, other.representsSection) && Kotlin.equals(this.assumingSection, other.assumingSection) && Kotlin.equals(this.thatSections, other.thatSections) && Kotlin.equals(this.aliasSection, other.aliasSection) && Kotlin.equals(this.metaDataSection, other.metaDataSection)))));
  };
  function isRepresentsGroup(node) {
    return firstSectionMatchesName(node, 'Represents');
  }
  function validateRepresentsGroup(groupNode, tracker) {
    return validateDefinesLikeGroup(tracker, groupNode, 'Represents', getCallableRef('validateRepresentsSection', function (node, tracker) {
      return validateRepresentsSection(node, tracker);
    }), 'that', getCallableRef('validateThatSection', function (node, tracker) {
      return validateThatSection(node, tracker);
    }), getCallableRef('RepresentsGroup', function (signature, id, representsSection, assumingSection, thatSections, aliasSection, metaDataSection) {
      return new RepresentsGroup(signature, id, representsSection, assumingSection, thatSections, aliasSection, metaDataSection);
    }));
  }
  function ResourceGroup(id, sourceSection, metaDataSection) {
    TopLevelGroup.call(this, metaDataSection);
    this.id = id;
    this.sourceSection = sourceSection;
    this.metaDataSection_396bb7$_0 = metaDataSection;
  }
  Object.defineProperty(ResourceGroup.prototype, 'metaDataSection', {
    get: function () {
      return this.metaDataSection_396bb7$_0;
    }
  });
  ResourceGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.sourceSection);
    if (this.metaDataSection != null) {
      fn(this.metaDataSection);
    }
  };
  ResourceGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return topLevelToCode(writer, isArg, indent, new IdStatement(this.id, validationFailure(emptyList())), [this.sourceSection, this.metaDataSection]);
  };
  ResourceGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1;
    return chalkTransformer(new ResourceGroup(this.id, Kotlin.isType(tmp$ = this.sourceSection.transform_ql661s$(chalkTransformer), ResourceSection) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_1 = (tmp$_0 = this.metaDataSection) != null ? tmp$_0.transform_ql661s$(chalkTransformer) : null, MetaDataSection) ? tmp$_1 : null));
  };
  ResourceGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResourceGroup',
    interfaces: [TopLevelGroup]
  };
  ResourceGroup.prototype.component1 = function () {
    return this.id;
  };
  ResourceGroup.prototype.component2 = function () {
    return this.sourceSection;
  };
  ResourceGroup.prototype.component3 = function () {
    return this.metaDataSection;
  };
  ResourceGroup.prototype.copy_qt568v$ = function (id, sourceSection, metaDataSection) {
    return new ResourceGroup(id === void 0 ? this.id : id, sourceSection === void 0 ? this.sourceSection : sourceSection, metaDataSection === void 0 ? this.metaDataSection : metaDataSection);
  };
  ResourceGroup.prototype.toString = function () {
    return 'ResourceGroup(id=' + Kotlin.toString(this.id) + (', sourceSection=' + Kotlin.toString(this.sourceSection)) + (', metaDataSection=' + Kotlin.toString(this.metaDataSection)) + ')';
  };
  ResourceGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.metaDataSection) | 0;
    return result;
  };
  ResourceGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.sourceSection, other.sourceSection) && Kotlin.equals(this.metaDataSection, other.metaDataSection)))));
  };
  function isResourceGroup(node) {
    return firstSectionMatchesName(node, 'Resource');
  }
  function validateResourceGroup(groupNode, tracker) {
    var tmp$, tmp$_0;
    var id = groupNode.id;
    if (id == null) {
      return validationFailure(listOf(new ParseError('A Resource group must have an id', getRow(groupNode), getColumn(groupNode))));
    }
    var $receiver = id.text;
    var endIndex = id.text.length - 1 | 0;
    var idText = $receiver.substring(1, endIndex);
    var errors = ArrayList_init();
    if (!Regex_init('[a-zA-Z0-9]+').matches_6bul2c$(idText)) {
      errors.add_11rb$(new ParseError('A resource id can only contain numbers and letters', getRow(groupNode), getColumn(groupNode)));
    }
    var sections = groupNode.sections;
    if (sections.isEmpty()) {
      errors.add_11rb$(new ParseError('Expected a resource section', getRow(groupNode), getColumn(groupNode)));
    }
    var resourceSection = sections.get_za3lpa$(0);
    var resourceValidation = validateResourceSection(resourceSection, tracker);
    if (Kotlin.isType(resourceValidation, ValidationFailure)) {
      errors.addAll_brywnq$(resourceValidation.errors);
    }
    var metaDataSection = null;
    if (sections.size >= 2) {
      var metadataValidation = validateMetaDataSection(sections.get_za3lpa$(1), tracker);
      if (Kotlin.isType(metadataValidation, ValidationFailure)) {
        errors.addAll_brywnq$(metadataValidation.errors);
        tmp$ = null;
      }
       else if (Kotlin.isType(metadataValidation, ValidationSuccess))
        tmp$ = metadataValidation.value;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      metaDataSection = tmp$;
    }
    if (sections.size > 2) {
      errors.add_11rb$(new ParseError('A Source group can only have a Source section and optionally a Metadata section', getRow(groupNode), getColumn(groupNode)));
    }
    if (!errors.isEmpty()) {
      return validationFailure(errors);
    }
    return validationSuccess_0(tracker, groupNode, new ResourceGroup(idText, (Kotlin.isType(tmp$_0 = resourceValidation, ValidationSuccess) ? tmp$_0 : throwCCE()).value, metaDataSection));
  }
  function TheoremGroup(theoremSection, aliasSection, metaDataSection) {
    TopLevelGroup.call(this, metaDataSection);
    this.theoremSection = theoremSection;
    this.aliasSection = aliasSection;
    this.metaDataSection_i69i7h$_0 = metaDataSection;
  }
  Object.defineProperty(TheoremGroup.prototype, 'metaDataSection', {
    get: function () {
      return this.metaDataSection_i69i7h$_0;
    }
  });
  TheoremGroup.prototype.forEach_s8izwl$ = function (fn) {
    fn(this.theoremSection);
    if (this.metaDataSection != null) {
      fn(this.metaDataSection);
    }
  };
  TheoremGroup.prototype.toCode_pc06dk$$default = function (isArg, indent, writer) {
    return topLevelToCode(writer, isArg, indent, null, [this.theoremSection, this.metaDataSection]);
  };
  TheoremGroup.prototype.transform_ql661s$ = function (chalkTransformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$_0 = Kotlin.isType(tmp$ = this.theoremSection.transform_ql661s$(chalkTransformer), TheoremSection) ? tmp$ : throwCCE();
    tmp$_3 = (tmp$_2 = (tmp$_1 = this.metaDataSection) != null ? tmp$_1.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_2, MetaDataSection) ? tmp$_2 : throwCCE();
    return chalkTransformer(new TheoremGroup(tmp$_0, (tmp$_5 = (tmp$_4 = this.aliasSection) != null ? tmp$_4.transform_ql661s$(chalkTransformer) : null) == null || Kotlin.isType(tmp$_5, AliasSection) ? tmp$_5 : throwCCE(), tmp$_3));
  };
  TheoremGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TheoremGroup',
    interfaces: [TopLevelGroup]
  };
  TheoremGroup.prototype.component1 = function () {
    return this.theoremSection;
  };
  TheoremGroup.prototype.component2 = function () {
    return this.aliasSection;
  };
  TheoremGroup.prototype.component3 = function () {
    return this.metaDataSection;
  };
  TheoremGroup.prototype.copy_1c0w1$ = function (theoremSection, aliasSection, metaDataSection) {
    return new TheoremGroup(theoremSection === void 0 ? this.theoremSection : theoremSection, aliasSection === void 0 ? this.aliasSection : aliasSection, metaDataSection === void 0 ? this.metaDataSection : metaDataSection);
  };
  TheoremGroup.prototype.toString = function () {
    return 'TheoremGroup(theoremSection=' + Kotlin.toString(this.theoremSection) + (', aliasSection=' + Kotlin.toString(this.aliasSection)) + (', metaDataSection=' + Kotlin.toString(this.metaDataSection)) + ')';
  };
  TheoremGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.theoremSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.aliasSection) | 0;
    result = result * 31 + Kotlin.hashCode(this.metaDataSection) | 0;
    return result;
  };
  TheoremGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.theoremSection, other.theoremSection) && Kotlin.equals(this.aliasSection, other.aliasSection) && Kotlin.equals(this.metaDataSection, other.metaDataSection)))));
  };
  function isTheoremGroup(node) {
    return firstSectionMatchesName(node, 'Theorem');
  }
  function validateTheoremGroup(groupNode, tracker) {
    return validateResultLikeGroup(tracker, groupNode, 'Theorem', getCallableRef('validateTheoremSection', function (node, tracker) {
      return validateTheoremSection(node, tracker);
    }), getCallableRef('TheoremGroup', function (theoremSection, aliasSection, metaDataSection) {
      return new TheoremGroup(theoremSection, aliasSection, metaDataSection);
    }));
  }
  function TopLevelGroup(metaDataSection) {
    this.metaDataSection_39sa8s$_0 = metaDataSection;
  }
  Object.defineProperty(TopLevelGroup.prototype, 'metaDataSection', {
    get: function () {
      return this.metaDataSection_39sa8s$_0;
    }
  });
  TopLevelGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TopLevelGroup',
    interfaces: [Phase2Node]
  };
  function topLevelToCode(writer, isArg, indent, id, sections) {
    writer.beginTopLevel();
    var useAsArg = isArg;
    if (id != null) {
      writer.writeIndent_eltk6l$(isArg, indent);
      writer.writeId_uaa61e$(id);
      writer.writeNewline_za3lpa$();
      useAsArg = false;
    }
    var nonNullSections = filterNotNull(sections);
    for (var i = 0; i !== nonNullSections.size; ++i) {
      var sect = nonNullSections.get_za3lpa$(i);
      writer.append_v8axul$(sect, useAsArg, indent);
      useAsArg = false;
      if (i !== (nonNullSections.size - 1 | 0)) {
        writer.writeNewline_za3lpa$();
      }
    }
    writer.endTopLevel();
    return writer;
  }
  function validateResultLikeGroup(tracker, groupNode, resultLikeName, validateResultLikeSection, buildGroup) {
    var tmp$, tmp$_0, tmp$_1;
    var errors = ArrayList_init();
    var group = groupNode.resolve();
    if (group.id != null) {
      errors.add_11rb$(new ParseError('A result, axiom, or conjecture cannot have an Id', getRow(group), getColumn(group)));
    }
    var sections = group.sections;
    var sectionMap;
    try {
      sectionMap = identifySections(sections, [resultLikeName, 'Alias?', 'Metadata?']);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var resultLike = ensureNotNull(sectionMap.get_11rb$(resultLikeName));
    var alias = (tmp$ = sectionMap.get_11rb$('Alias')) != null ? tmp$ : emptyList();
    var metadata = (tmp$_0 = sectionMap.get_11rb$('Metadata')) != null ? tmp$_0 : emptyList();
    var resultLikeSection = null;
    var resultLikeValidation = validateResultLikeSection(resultLike.get_za3lpa$(0), tracker);
    if (Kotlin.isType(resultLikeValidation, ValidationSuccess))
      resultLikeSection = resultLikeValidation.value;
    else if (Kotlin.isType(resultLikeValidation, ValidationFailure))
      errors.addAll_brywnq$(resultLikeValidation.errors);
    else
      Kotlin.noWhenBranchMatched();
    var metaDataSection = null;
    if (!metadata.isEmpty()) {
      var metaDataValidation = validateMetaDataSection(metadata.get_za3lpa$(0), tracker);
      if (Kotlin.isType(metaDataValidation, ValidationSuccess))
        metaDataSection = metaDataValidation.value;
      else if (Kotlin.isType(metaDataValidation, ValidationFailure))
        errors.addAll_brywnq$(metaDataValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    var aliasSection = null;
    if (!alias.isEmpty()) {
      var aliasValidation = validateAliasSection(alias.get_za3lpa$(0), tracker);
      if (Kotlin.isType(aliasValidation, ValidationSuccess))
        aliasSection = aliasValidation.value;
      else if (Kotlin.isType(aliasValidation, ValidationFailure))
        errors.addAll_brywnq$(aliasValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    if (!errors.isEmpty()) {
      tmp$_1 = validationFailure(errors);
    }
     else
      tmp$_1 = validationSuccess_0(tracker, groupNode, buildGroup(ensureNotNull(resultLikeSection), aliasSection, metaDataSection));
    return tmp$_1;
  }
  function validateDefinesLikeGroup(tracker, groupNode, definesLikeSectionName, validateDefinesLikeSection, endSectionName, validateEndSection, buildGroup) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var errors = ArrayList_init();
    var group = groupNode.resolve();
    var id = null;
    if (group.id != null) {
      var tmp$_5 = group.id;
      var rawText = tmp$_5.component1()
      , row = tmp$_5.component3()
      , column = tmp$_5.component4();
      var endIndex = rawText.length - 1 | 0;
      var statementText = "'" + rawText.substring(1, endIndex) + "'";
      var stmtToken = new Phase1Token(statementText, ChalkTalkTokenType$Statement_getInstance(), row, column);
      var idValidation = validateIdStatement(stmtToken, tracker);
      if (Kotlin.isType(idValidation, ValidationSuccess))
        id = idValidation.value;
      else if (Kotlin.isType(idValidation, ValidationFailure))
        errors.addAll_brywnq$(idValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
     else {
      if (!group.sections.isEmpty()) {
        tmp$ = first(group.sections).name.text;
      }
       else {
        tmp$ = 'Defines or Represents';
      }
      var type = tmp$;
      errors.add_11rb$(new ParseError('A ' + type + ' must have an Id', getRow(group), getColumn(group)));
    }
    var sections = group.sections;
    var sectionMap;
    try {
      sectionMap = identifySections(sections, [definesLikeSectionName, 'assuming?', endSectionName, 'Alias?', 'Metadata?']);
    }
     catch (e) {
      if (Kotlin.isType(e, ParseError)) {
        errors.add_11rb$(new ParseError(e.message, e.row, e.column));
        return validationFailure(errors);
      }
       else
        throw e;
    }
    var definesLike = ensureNotNull(sectionMap.get_11rb$(definesLikeSectionName));
    var assuming = (tmp$_0 = sectionMap.get_11rb$('assuming')) != null ? tmp$_0 : emptyList();
    var ends = ensureNotNull(sectionMap.get_11rb$(endSectionName));
    var alias = (tmp$_1 = sectionMap.get_11rb$('Alias')) != null ? tmp$_1 : emptyList();
    var metadata = (tmp$_2 = sectionMap.get_11rb$('Metadata')) != null ? tmp$_2 : emptyList();
    var definesLikeSection = null;
    var definesLikeValidation = validateDefinesLikeSection(definesLike.get_za3lpa$(0), tracker);
    if (Kotlin.isType(definesLikeValidation, ValidationSuccess))
      definesLikeSection = definesLikeValidation.value;
    else if (Kotlin.isType(definesLikeValidation, ValidationFailure))
      errors.addAll_brywnq$(definesLikeValidation.errors);
    else
      Kotlin.noWhenBranchMatched();
    var assumingSection = null;
    if (!assuming.isEmpty()) {
      var assumingValidation = validateAssumingSection(assuming.get_za3lpa$(0), tracker);
      if (Kotlin.isType(assumingValidation, ValidationSuccess))
        assumingSection = assumingValidation.value;
      else if (Kotlin.isType(assumingValidation, ValidationFailure))
        errors.addAll_brywnq$(assumingValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    var endSections = ArrayList_init();
    tmp$_3 = ends.iterator();
    while (tmp$_3.hasNext()) {
      var end = tmp$_3.next();
      var endValidation = validateEndSection(end, tracker);
      if (Kotlin.isType(endValidation, ValidationSuccess))
        endSections.add_11rb$(endValidation.value);
      else if (Kotlin.isType(endValidation, ValidationFailure))
        errors.addAll_brywnq$(endValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    var aliasSection = null;
    if (!alias.isEmpty()) {
      var aliasValidation = validateAliasSection(alias.get_za3lpa$(0), tracker);
      if (Kotlin.isType(aliasValidation, ValidationSuccess))
        aliasSection = aliasValidation.value;
      else if (Kotlin.isType(aliasValidation, ValidationFailure))
        errors.addAll_brywnq$(aliasValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    var metaDataSection = null;
    if (!metadata.isEmpty()) {
      var metaDataValidation = validateMetaDataSection(metadata.get_za3lpa$(0), tracker);
      if (Kotlin.isType(metaDataValidation, ValidationSuccess))
        metaDataSection = metaDataValidation.value;
      else if (Kotlin.isType(metaDataValidation, ValidationFailure))
        errors.addAll_brywnq$(metaDataValidation.errors);
      else
        Kotlin.noWhenBranchMatched();
    }
    if (!errors.isEmpty()) {
      tmp$_4 = validationFailure(errors);
    }
     else
      tmp$_4 = validationSuccess_0(tracker, groupNode, buildGroup(id != null ? signature_1(id) : null, ensureNotNull(id), ensureNotNull(definesLikeSection), assumingSection, endSections, aliasSection, metaDataSection));
    return tmp$_4;
  }
  function Queue() {
  }
  Queue.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Queue',
    interfaces: [Iterable]
  };
  function newQueue() {
    return new QueueImpl();
  }
  function QueueImpl() {
    this.data_0 = ArrayList_init();
  }
  QueueImpl.prototype.offer_11rb$ = function (value) {
    this.data_0.add_wxm5ur$(0, value);
  };
  QueueImpl.prototype.poll = function () {
    return this.data_0.removeAt_za3lpa$(this.data_0.size - 1 | 0);
  };
  QueueImpl.prototype.peek = function () {
    return last(this.data_0);
  };
  QueueImpl.prototype.isEmpty = function () {
    return this.data_0.isEmpty();
  };
  QueueImpl.prototype.iterator = function () {
    return this.data_0.iterator();
  };
  QueueImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueueImpl',
    interfaces: [Queue]
  };
  function Stack() {
  }
  Stack.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Stack',
    interfaces: []
  };
  function newStack() {
    return new StackImpl();
  }
  function StackImpl() {
    this.data_0 = ArrayList_init();
  }
  StackImpl.prototype.push_11rb$ = function (value) {
    this.data_0.add_11rb$(value);
  };
  StackImpl.prototype.pop = function () {
    return this.data_0.removeAt_za3lpa$(this.data_0.size - 1 | 0);
  };
  StackImpl.prototype.peek = function () {
    return last(this.data_0);
  };
  StackImpl.prototype.isEmpty = function () {
    return this.data_0.isEmpty();
  };
  StackImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StackImpl',
    interfaces: [Stack]
  };
  function TexTalkNodeType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TexTalkNodeType_initFields() {
    TexTalkNodeType_initFields = function () {
    };
    TexTalkNodeType$Token_instance = new TexTalkNodeType('Token', 0);
    TexTalkNodeType$Identifier_instance = new TexTalkNodeType('Identifier', 1);
    TexTalkNodeType$Operator_instance = new TexTalkNodeType('Operator', 2);
    TexTalkNodeType$SyntheticGroup_instance = new TexTalkNodeType('SyntheticGroup', 3);
    TexTalkNodeType$ParenGroup_instance = new TexTalkNodeType('ParenGroup', 4);
    TexTalkNodeType$SquareGroup_instance = new TexTalkNodeType('SquareGroup', 5);
    TexTalkNodeType$CurlyGroup_instance = new TexTalkNodeType('CurlyGroup', 6);
    TexTalkNodeType$NamedGroup_instance = new TexTalkNodeType('NamedGroup', 7);
    TexTalkNodeType$Command_instance = new TexTalkNodeType('Command', 8);
    TexTalkNodeType$CommandPart_instance = new TexTalkNodeType('CommandPart', 9);
    TexTalkNodeType$Expression_instance = new TexTalkNodeType('Expression', 10);
    TexTalkNodeType$SubSup_instance = new TexTalkNodeType('SubSup', 11);
    TexTalkNodeType$Parameters_instance = new TexTalkNodeType('Parameters', 12);
    TexTalkNodeType$Comma_instance = new TexTalkNodeType('Comma', 13);
    TexTalkNodeType$Is_instance = new TexTalkNodeType('Is', 14);
    TexTalkNodeType$ColonEquals_instance = new TexTalkNodeType('ColonEquals', 15);
  }
  var TexTalkNodeType$Token_instance;
  function TexTalkNodeType$Token_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$Token_instance;
  }
  var TexTalkNodeType$Identifier_instance;
  function TexTalkNodeType$Identifier_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$Identifier_instance;
  }
  var TexTalkNodeType$Operator_instance;
  function TexTalkNodeType$Operator_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$Operator_instance;
  }
  var TexTalkNodeType$SyntheticGroup_instance;
  function TexTalkNodeType$SyntheticGroup_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$SyntheticGroup_instance;
  }
  var TexTalkNodeType$ParenGroup_instance;
  function TexTalkNodeType$ParenGroup_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$ParenGroup_instance;
  }
  var TexTalkNodeType$SquareGroup_instance;
  function TexTalkNodeType$SquareGroup_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$SquareGroup_instance;
  }
  var TexTalkNodeType$CurlyGroup_instance;
  function TexTalkNodeType$CurlyGroup_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$CurlyGroup_instance;
  }
  var TexTalkNodeType$NamedGroup_instance;
  function TexTalkNodeType$NamedGroup_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$NamedGroup_instance;
  }
  var TexTalkNodeType$Command_instance;
  function TexTalkNodeType$Command_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$Command_instance;
  }
  var TexTalkNodeType$CommandPart_instance;
  function TexTalkNodeType$CommandPart_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$CommandPart_instance;
  }
  var TexTalkNodeType$Expression_instance;
  function TexTalkNodeType$Expression_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$Expression_instance;
  }
  var TexTalkNodeType$SubSup_instance;
  function TexTalkNodeType$SubSup_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$SubSup_instance;
  }
  var TexTalkNodeType$Parameters_instance;
  function TexTalkNodeType$Parameters_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$Parameters_instance;
  }
  var TexTalkNodeType$Comma_instance;
  function TexTalkNodeType$Comma_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$Comma_instance;
  }
  var TexTalkNodeType$Is_instance;
  function TexTalkNodeType$Is_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$Is_instance;
  }
  var TexTalkNodeType$ColonEquals_instance;
  function TexTalkNodeType$ColonEquals_getInstance() {
    TexTalkNodeType_initFields();
    return TexTalkNodeType$ColonEquals_instance;
  }
  TexTalkNodeType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TexTalkNodeType',
    interfaces: [Enum]
  };
  function TexTalkNodeType$values() {
    return [TexTalkNodeType$Token_getInstance(), TexTalkNodeType$Identifier_getInstance(), TexTalkNodeType$Operator_getInstance(), TexTalkNodeType$SyntheticGroup_getInstance(), TexTalkNodeType$ParenGroup_getInstance(), TexTalkNodeType$SquareGroup_getInstance(), TexTalkNodeType$CurlyGroup_getInstance(), TexTalkNodeType$NamedGroup_getInstance(), TexTalkNodeType$Command_getInstance(), TexTalkNodeType$CommandPart_getInstance(), TexTalkNodeType$Expression_getInstance(), TexTalkNodeType$SubSup_getInstance(), TexTalkNodeType$Parameters_getInstance(), TexTalkNodeType$Comma_getInstance(), TexTalkNodeType$Is_getInstance(), TexTalkNodeType$ColonEquals_getInstance()];
  }
  TexTalkNodeType.values = TexTalkNodeType$values;
  function TexTalkNodeType$valueOf(name) {
    switch (name) {
      case 'Token':
        return TexTalkNodeType$Token_getInstance();
      case 'Identifier':
        return TexTalkNodeType$Identifier_getInstance();
      case 'Operator':
        return TexTalkNodeType$Operator_getInstance();
      case 'SyntheticGroup':
        return TexTalkNodeType$SyntheticGroup_getInstance();
      case 'ParenGroup':
        return TexTalkNodeType$ParenGroup_getInstance();
      case 'SquareGroup':
        return TexTalkNodeType$SquareGroup_getInstance();
      case 'CurlyGroup':
        return TexTalkNodeType$CurlyGroup_getInstance();
      case 'NamedGroup':
        return TexTalkNodeType$NamedGroup_getInstance();
      case 'Command':
        return TexTalkNodeType$Command_getInstance();
      case 'CommandPart':
        return TexTalkNodeType$CommandPart_getInstance();
      case 'Expression':
        return TexTalkNodeType$Expression_getInstance();
      case 'SubSup':
        return TexTalkNodeType$SubSup_getInstance();
      case 'Parameters':
        return TexTalkNodeType$Parameters_getInstance();
      case 'Comma':
        return TexTalkNodeType$Comma_getInstance();
      case 'Is':
        return TexTalkNodeType$Is_getInstance();
      case 'ColonEquals':
        return TexTalkNodeType$ColonEquals_getInstance();
      default:throwISE('No enum constant mathlingua.common.textalk.TexTalkNodeType.' + name);
    }
  }
  TexTalkNodeType.valueOf_61zpoe$ = TexTalkNodeType$valueOf;
  function TexTalkNode() {
  }
  function TexTalkNode$toCode$lambda(it) {
    return null;
  }
  TexTalkNode.prototype.toCode_6z438g$ = function (interceptor, callback$default) {
    if (interceptor === void 0)
      interceptor = TexTalkNode$toCode$lambda;
    return callback$default ? callback$default(interceptor) : this.toCode_6z438g$$default(interceptor);
  };
  TexTalkNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TexTalkNode',
    interfaces: []
  };
  function IsTexTalkNode(lhs, rhs) {
    this.lhs = lhs;
    this.rhs = rhs;
  }
  Object.defineProperty(IsTexTalkNode.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$Is_getInstance();
    }
  });
  IsTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var builder = StringBuilder_init();
    builder.append_gw00v9$(this.lhs.toCode_6z438g$(interceptor));
    builder.append_gw00v9$(' is ');
    builder.append_gw00v9$(this.rhs.toCode_6z438g$(interceptor));
    return builder.toString();
  };
  IsTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
    fn(this.lhs);
    fn(this.rhs);
  };
  IsTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    var tmp$, tmp$_0;
    return transformer(new IsTexTalkNode(Kotlin.isType(tmp$ = this.lhs.transform_7szim8$(transformer), ParametersTexTalkNode) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.rhs.transform_7szim8$(transformer), ParametersTexTalkNode) ? tmp$_0 : throwCCE()));
  };
  IsTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IsTexTalkNode',
    interfaces: [TexTalkNode]
  };
  IsTexTalkNode.prototype.component1 = function () {
    return this.lhs;
  };
  IsTexTalkNode.prototype.component2 = function () {
    return this.rhs;
  };
  IsTexTalkNode.prototype.copy_bfhfii$ = function (lhs, rhs) {
    return new IsTexTalkNode(lhs === void 0 ? this.lhs : lhs, rhs === void 0 ? this.rhs : rhs);
  };
  IsTexTalkNode.prototype.toString = function () {
    return 'IsTexTalkNode(lhs=' + Kotlin.toString(this.lhs) + (', rhs=' + Kotlin.toString(this.rhs)) + ')';
  };
  IsTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lhs) | 0;
    result = result * 31 + Kotlin.hashCode(this.rhs) | 0;
    return result;
  };
  IsTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lhs, other.lhs) && Kotlin.equals(this.rhs, other.rhs)))));
  };
  function ColonEqualsTexTalkNode(lhs, rhs) {
    this.lhs = lhs;
    this.rhs = rhs;
  }
  Object.defineProperty(ColonEqualsTexTalkNode.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$ColonEquals_getInstance();
    }
  });
  ColonEqualsTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var builder = StringBuilder_init();
    builder.append_gw00v9$(this.lhs.toCode_6z438g$(interceptor));
    builder.append_gw00v9$(' := ');
    builder.append_gw00v9$(this.rhs.toCode_6z438g$(interceptor));
    return builder.toString();
  };
  ColonEqualsTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
    fn(this.lhs);
    fn(this.rhs);
  };
  ColonEqualsTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    var tmp$, tmp$_0;
    return transformer(new ColonEqualsTexTalkNode(Kotlin.isType(tmp$ = this.lhs.transform_7szim8$(transformer), ParametersTexTalkNode) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.rhs.transform_7szim8$(transformer), ParametersTexTalkNode) ? tmp$_0 : throwCCE()));
  };
  ColonEqualsTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColonEqualsTexTalkNode',
    interfaces: [TexTalkNode]
  };
  ColonEqualsTexTalkNode.prototype.component1 = function () {
    return this.lhs;
  };
  ColonEqualsTexTalkNode.prototype.component2 = function () {
    return this.rhs;
  };
  ColonEqualsTexTalkNode.prototype.copy_bfhfii$ = function (lhs, rhs) {
    return new ColonEqualsTexTalkNode(lhs === void 0 ? this.lhs : lhs, rhs === void 0 ? this.rhs : rhs);
  };
  ColonEqualsTexTalkNode.prototype.toString = function () {
    return 'ColonEqualsTexTalkNode(lhs=' + Kotlin.toString(this.lhs) + (', rhs=' + Kotlin.toString(this.rhs)) + ')';
  };
  ColonEqualsTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lhs) | 0;
    result = result * 31 + Kotlin.hashCode(this.rhs) | 0;
    return result;
  };
  ColonEqualsTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lhs, other.lhs) && Kotlin.equals(this.rhs, other.rhs)))));
  };
  function CommandPart(name, square, subSup, groups, namedGroups) {
    this.name = name;
    this.square = square;
    this.subSup = subSup;
    this.groups = groups;
    this.namedGroups = namedGroups;
  }
  Object.defineProperty(CommandPart.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$CommandPart_getInstance();
    }
  });
  CommandPart.prototype.toCode_6z438g$$default = function (interceptor) {
    var tmp$, tmp$_0;
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var buffer = StringBuilder_init();
    buffer.append_gw00v9$(this.name.toCode_6z438g$(interceptor));
    if (this.square != null) {
      buffer.append_gw00v9$(this.square.toCode_6z438g$(interceptor));
    }
    if (this.subSup != null) {
      buffer.append_gw00v9$(this.subSup.toCode_6z438g$(interceptor));
    }
    tmp$ = this.groups.iterator();
    while (tmp$.hasNext()) {
      var grp = tmp$.next();
      buffer.append_gw00v9$(grp.toCode_6z438g$(interceptor));
    }
    if (!this.namedGroups.isEmpty()) {
      buffer.append_gw00v9$(':');
    }
    tmp$_0 = this.namedGroups.iterator();
    while (tmp$_0.hasNext()) {
      var namedGrp = tmp$_0.next();
      buffer.append_gw00v9$(namedGrp.toCode_6z438g$(interceptor));
    }
    return buffer.toString();
  };
  CommandPart.prototype.forEach_j2ps96$ = function (fn) {
    fn(this.name);
    if (this.square != null) {
      fn(this.square);
    }
    if (this.subSup != null) {
      fn(this.subSup);
    }
    var tmp$;
    tmp$ = this.groups.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
    var tmp$_0;
    tmp$_0 = this.namedGroups.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      fn(element_0);
    }
  };
  CommandPart.prototype.transform_7szim8$ = function (transformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$_0 = Kotlin.isType(tmp$ = this.name.transform_7szim8$(transformer), TextTexTalkNode) ? tmp$ : throwCCE();
    tmp$_3 = (tmp$_2 = (tmp$_1 = this.square) != null ? tmp$_1.transform_7szim8$(transformer) : null) == null || Kotlin.isType(tmp$_2, GroupTexTalkNode) ? tmp$_2 : throwCCE();
    tmp$_6 = (tmp$_5 = (tmp$_4 = this.subSup) != null ? tmp$_4.transform_7szim8$(transformer) : null) == null || Kotlin.isType(tmp$_5, SubSupTexTalkNode) ? tmp$_5 : throwCCE();
    var $receiver = this.groups;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_7;
    tmp$_7 = $receiver.iterator();
    while (tmp$_7.hasNext()) {
      var item = tmp$_7.next();
      var tmp$_8;
      destination.add_11rb$(Kotlin.isType(tmp$_8 = item.transform_7szim8$(transformer), GroupTexTalkNode) ? tmp$_8 : throwCCE());
    }
    var $receiver_0 = this.namedGroups;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_9;
    tmp$_9 = $receiver_0.iterator();
    while (tmp$_9.hasNext()) {
      var item_0 = tmp$_9.next();
      var tmp$_10;
      destination_0.add_11rb$(Kotlin.isType(tmp$_10 = item_0.transform_7szim8$(transformer), NamedGroupTexTalkNode) ? tmp$_10 : throwCCE());
    }
    return transformer(new CommandPart(tmp$_0, tmp$_3, tmp$_6, destination, destination_0));
  };
  CommandPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandPart',
    interfaces: [TexTalkNode]
  };
  CommandPart.prototype.component1 = function () {
    return this.name;
  };
  CommandPart.prototype.component2 = function () {
    return this.square;
  };
  CommandPart.prototype.component3 = function () {
    return this.subSup;
  };
  CommandPart.prototype.component4 = function () {
    return this.groups;
  };
  CommandPart.prototype.component5 = function () {
    return this.namedGroups;
  };
  CommandPart.prototype.copy_6bnsom$ = function (name, square, subSup, groups, namedGroups) {
    return new CommandPart(name === void 0 ? this.name : name, square === void 0 ? this.square : square, subSup === void 0 ? this.subSup : subSup, groups === void 0 ? this.groups : groups, namedGroups === void 0 ? this.namedGroups : namedGroups);
  };
  CommandPart.prototype.toString = function () {
    return 'CommandPart(name=' + Kotlin.toString(this.name) + (', square=' + Kotlin.toString(this.square)) + (', subSup=' + Kotlin.toString(this.subSup)) + (', groups=' + Kotlin.toString(this.groups)) + (', namedGroups=' + Kotlin.toString(this.namedGroups)) + ')';
  };
  CommandPart.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.square) | 0;
    result = result * 31 + Kotlin.hashCode(this.subSup) | 0;
    result = result * 31 + Kotlin.hashCode(this.groups) | 0;
    result = result * 31 + Kotlin.hashCode(this.namedGroups) | 0;
    return result;
  };
  CommandPart.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.square, other.square) && Kotlin.equals(this.subSup, other.subSup) && Kotlin.equals(this.groups, other.groups) && Kotlin.equals(this.namedGroups, other.namedGroups)))));
  };
  function Command(parts) {
    this.parts = parts;
  }
  Object.defineProperty(Command.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$Command_getInstance();
    }
  });
  Command.prototype.toCode_6z438g$$default = function (interceptor) {
    var tmp$;
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var builder = new StringBuilder('\\');
    tmp$ = this.parts.size;
    for (var i = 0; i < tmp$; i++) {
      if (i > 0) {
        builder.append_s8itvh$(46);
      }
      builder.append_gw00v9$(this.parts.get_za3lpa$(i).toCode_6z438g$(interceptor));
    }
    return builder.toString();
  };
  Command.prototype.forEach_j2ps96$ = function (fn) {
    var tmp$;
    tmp$ = this.parts.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  Command.prototype.transform_7szim8$ = function (transformer) {
    var $receiver = this.parts;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_7szim8$(transformer), CommandPart) ? tmp$_0 : throwCCE());
    }
    return transformer(new Command(destination));
  };
  Command.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Command',
    interfaces: [TexTalkNode]
  };
  Command.prototype.component1 = function () {
    return this.parts;
  };
  Command.prototype.copy_aj4jsd$ = function (parts) {
    return new Command(parts === void 0 ? this.parts : parts);
  };
  Command.prototype.toString = function () {
    return 'Command(parts=' + Kotlin.toString(this.parts) + ')';
  };
  Command.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.parts) | 0;
    return result;
  };
  Command.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.parts, other.parts))));
  };
  function ExpressionTexTalkNode(children) {
    this.children = children;
  }
  Object.defineProperty(ExpressionTexTalkNode.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$Expression_getInstance();
    }
  });
  ExpressionTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var tmp$;
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var builder = StringBuilder_init();
    tmp$ = this.children;
    for (var i = 0; i !== tmp$.size; ++i) {
      var child = this.children.get_za3lpa$(i);
      builder.append_gw00v9$(child.toCode_6z438g$(interceptor));
      if (i !== (this.children.size - 1 | 0)) {
        builder.append_gw00v9$(' ');
      }
    }
    return builder.toString();
  };
  ExpressionTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  ExpressionTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    var $receiver = this.children;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.transform_7szim8$(transformer));
    }
    return transformer(new ExpressionTexTalkNode(destination));
  };
  ExpressionTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpressionTexTalkNode',
    interfaces: [TexTalkNode]
  };
  ExpressionTexTalkNode.prototype.component1 = function () {
    return this.children;
  };
  ExpressionTexTalkNode.prototype.copy_z23bh2$ = function (children) {
    return new ExpressionTexTalkNode(children === void 0 ? this.children : children);
  };
  ExpressionTexTalkNode.prototype.toString = function () {
    return 'ExpressionTexTalkNode(children=' + Kotlin.toString(this.children) + ')';
  };
  ExpressionTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.children) | 0;
    return result;
  };
  ExpressionTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.children, other.children))));
  };
  function ParametersTexTalkNode(items) {
    this.items = items;
  }
  Object.defineProperty(ParametersTexTalkNode.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$Parameters_getInstance();
    }
  });
  ParametersTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var tmp$;
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var buffer = StringBuilder_init();
    if (!this.items.isEmpty()) {
      buffer.append_gw00v9$(this.items.get_za3lpa$(0).toCode_6z438g$(interceptor));
    }
    tmp$ = this.items.size;
    for (var i = 1; i < tmp$; i++) {
      buffer.append_gw00v9$(', ');
      buffer.append_gw00v9$(this.items.get_za3lpa$(i).toCode_6z438g$(interceptor));
    }
    return buffer.toString();
  };
  ParametersTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
    var tmp$;
    tmp$ = this.items.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      fn(element);
    }
  };
  ParametersTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    var $receiver = this.items;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(Kotlin.isType(tmp$_0 = item.transform_7szim8$(transformer), ExpressionTexTalkNode) ? tmp$_0 : throwCCE());
    }
    return transformer(new ParametersTexTalkNode(destination));
  };
  ParametersTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParametersTexTalkNode',
    interfaces: [TexTalkNode]
  };
  ParametersTexTalkNode.prototype.component1 = function () {
    return this.items;
  };
  ParametersTexTalkNode.prototype.copy_qcojy$ = function (items) {
    return new ParametersTexTalkNode(items === void 0 ? this.items : items);
  };
  ParametersTexTalkNode.prototype.toString = function () {
    return 'ParametersTexTalkNode(items=' + Kotlin.toString(this.items) + ')';
  };
  ParametersTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  ParametersTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function GroupTexTalkNode(type, parameters, isVarArg) {
    this.type_7n14oy$_0 = type;
    this.parameters = parameters;
    this.isVarArg = isVarArg;
  }
  Object.defineProperty(GroupTexTalkNode.prototype, 'type', {
    get: function () {
      return this.type_7n14oy$_0;
    }
  });
  GroupTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var prefix;
    var suffix;
    switch (this.type.name) {
      case 'ParenGroup':
        prefix = '(';
        suffix = ')';
        break;
      case 'SquareGroup':
        prefix = '[';
        suffix = ']';
        break;
      case 'CurlyGroup':
        prefix = '{';
        suffix = '}';
        break;
      case 'SyntheticGroup':
        prefix = '';
        suffix = '';
        break;
      default:throw RuntimeException_init('Unrecognized group type ' + this.type);
    }
    var buffer = new StringBuilder(prefix);
    buffer.append_gw00v9$(this.parameters.toCode_6z438g$(interceptor));
    buffer.append_gw00v9$(suffix);
    if (this.isVarArg) {
      buffer.append_gw00v9$('...');
    }
    return buffer.toString();
  };
  GroupTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
    fn(this.parameters);
  };
  GroupTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    var tmp$;
    return transformer(new GroupTexTalkNode(this.type, Kotlin.isType(tmp$ = this.parameters.transform_7szim8$(transformer), ParametersTexTalkNode) ? tmp$ : throwCCE(), this.isVarArg));
  };
  GroupTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GroupTexTalkNode',
    interfaces: [TexTalkNode]
  };
  GroupTexTalkNode.prototype.component1 = function () {
    return this.type;
  };
  GroupTexTalkNode.prototype.component2 = function () {
    return this.parameters;
  };
  GroupTexTalkNode.prototype.component3 = function () {
    return this.isVarArg;
  };
  GroupTexTalkNode.prototype.copy_qf8rvx$ = function (type, parameters, isVarArg) {
    return new GroupTexTalkNode(type === void 0 ? this.type : type, parameters === void 0 ? this.parameters : parameters, isVarArg === void 0 ? this.isVarArg : isVarArg);
  };
  GroupTexTalkNode.prototype.toString = function () {
    return 'GroupTexTalkNode(type=' + Kotlin.toString(this.type) + (', parameters=' + Kotlin.toString(this.parameters)) + (', isVarArg=' + Kotlin.toString(this.isVarArg)) + ')';
  };
  GroupTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.parameters) | 0;
    result = result * 31 + Kotlin.hashCode(this.isVarArg) | 0;
    return result;
  };
  GroupTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.parameters, other.parameters) && Kotlin.equals(this.isVarArg, other.isVarArg)))));
  };
  function NamedGroupTexTalkNode(name, group) {
    this.name = name;
    this.group = group;
  }
  Object.defineProperty(NamedGroupTexTalkNode.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$NamedGroup_getInstance();
    }
  });
  NamedGroupTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var buffer = StringBuilder_init();
    buffer.append_gw00v9$(this.name.toCode_6z438g$(interceptor));
    buffer.append_gw00v9$(this.group.toCode_6z438g$(interceptor));
    return buffer.toString();
  };
  NamedGroupTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
    fn(this.name);
    fn(this.group);
  };
  NamedGroupTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    var tmp$, tmp$_0;
    return transformer(new NamedGroupTexTalkNode(Kotlin.isType(tmp$ = this.name.transform_7szim8$(transformer), TextTexTalkNode) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = this.group.transform_7szim8$(transformer), GroupTexTalkNode) ? tmp$_0 : throwCCE()));
  };
  NamedGroupTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedGroupTexTalkNode',
    interfaces: [TexTalkNode]
  };
  NamedGroupTexTalkNode.prototype.component1 = function () {
    return this.name;
  };
  NamedGroupTexTalkNode.prototype.component2 = function () {
    return this.group;
  };
  NamedGroupTexTalkNode.prototype.copy_egec36$ = function (name, group) {
    return new NamedGroupTexTalkNode(name === void 0 ? this.name : name, group === void 0 ? this.group : group);
  };
  NamedGroupTexTalkNode.prototype.toString = function () {
    return 'NamedGroupTexTalkNode(name=' + Kotlin.toString(this.name) + (', group=' + Kotlin.toString(this.group)) + ')';
  };
  NamedGroupTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.group) | 0;
    return result;
  };
  NamedGroupTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.group, other.group)))));
  };
  function SubSupTexTalkNode(sub, sup) {
    this.sub = sub;
    this.sup = sup;
  }
  Object.defineProperty(SubSupTexTalkNode.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$SubSup_getInstance();
    }
  });
  SubSupTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var builder = StringBuilder_init();
    if (this.sub != null) {
      builder.append_gw00v9$('_');
      if (this.sub.parameters.items.size === 1 && this.sub.parameters.items.get_za3lpa$(0).children.size === 1 && this.sub.parameters.items.get_za3lpa$(0).children.get_za3lpa$(0).type === TexTalkNodeType$Identifier_getInstance()) {
        builder.append_gw00v9$(this.sub.parameters.items.get_za3lpa$(0).children.get_za3lpa$(0).toCode_6z438g$(interceptor));
      }
       else {
        builder.append_gw00v9$(this.sub.toCode_6z438g$(interceptor));
      }
    }
    if (this.sup != null) {
      builder.append_gw00v9$('^');
      if (this.sup.parameters.items.size === 1 && this.sup.parameters.items.get_za3lpa$(0).children.size === 1 && this.sup.parameters.items.get_za3lpa$(0).children.get_za3lpa$(0).type === TexTalkNodeType$Identifier_getInstance()) {
        builder.append_gw00v9$(this.sup.parameters.items.get_za3lpa$(0).children.get_za3lpa$(0).toCode_6z438g$(interceptor));
      }
       else {
        builder.append_gw00v9$(this.sup.toCode_6z438g$(interceptor));
      }
    }
    return builder.toString();
  };
  SubSupTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
    if (this.sub != null) {
      fn(this.sub);
    }
    if (this.sup != null) {
      fn(this.sup);
    }
  };
  SubSupTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return transformer(new SubSupTexTalkNode((tmp$_0 = (tmp$ = this.sub) != null ? tmp$.transform_7szim8$(transformer) : null) == null || Kotlin.isType(tmp$_0, GroupTexTalkNode) ? tmp$_0 : throwCCE(), (tmp$_2 = (tmp$_1 = this.sup) != null ? tmp$_1.transform_7szim8$(transformer) : null) == null || Kotlin.isType(tmp$_2, GroupTexTalkNode) ? tmp$_2 : throwCCE()));
  };
  SubSupTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubSupTexTalkNode',
    interfaces: [TexTalkNode]
  };
  SubSupTexTalkNode.prototype.component1 = function () {
    return this.sub;
  };
  SubSupTexTalkNode.prototype.component2 = function () {
    return this.sup;
  };
  SubSupTexTalkNode.prototype.copy_r2lyxa$ = function (sub, sup) {
    return new SubSupTexTalkNode(sub === void 0 ? this.sub : sub, sup === void 0 ? this.sup : sup);
  };
  SubSupTexTalkNode.prototype.toString = function () {
    return 'SubSupTexTalkNode(sub=' + Kotlin.toString(this.sub) + (', sup=' + Kotlin.toString(this.sup)) + ')';
  };
  SubSupTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sub) | 0;
    result = result * 31 + Kotlin.hashCode(this.sup) | 0;
    return result;
  };
  SubSupTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sub, other.sub) && Kotlin.equals(this.sup, other.sup)))));
  };
  function TextTexTalkNode(type, tokenType, text, isVarArg) {
    this.type_twguqo$_0 = type;
    this.tokenType = tokenType;
    this.text = text;
    this.isVarArg = isVarArg;
  }
  Object.defineProperty(TextTexTalkNode.prototype, 'type', {
    get: function () {
      return this.type_twguqo$_0;
    }
  });
  TextTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var tmp$, tmp$_0;
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    tmp$_0 = this.text;
    if (this.isVarArg) {
      tmp$ = '...';
    }
     else {
      tmp$ = '';
    }
    return tmp$_0 + tmp$;
  };
  TextTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
  };
  TextTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    return transformer(this);
  };
  TextTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextTexTalkNode',
    interfaces: [TexTalkNode]
  };
  TextTexTalkNode.prototype.component1 = function () {
    return this.type;
  };
  TextTexTalkNode.prototype.component2 = function () {
    return this.tokenType;
  };
  TextTexTalkNode.prototype.component3 = function () {
    return this.text;
  };
  TextTexTalkNode.prototype.component4 = function () {
    return this.isVarArg;
  };
  TextTexTalkNode.prototype.copy_e4igys$ = function (type, tokenType, text, isVarArg) {
    return new TextTexTalkNode(type === void 0 ? this.type : type, tokenType === void 0 ? this.tokenType : tokenType, text === void 0 ? this.text : text, isVarArg === void 0 ? this.isVarArg : isVarArg);
  };
  TextTexTalkNode.prototype.toString = function () {
    return 'TextTexTalkNode(type=' + Kotlin.toString(this.type) + (', tokenType=' + Kotlin.toString(this.tokenType)) + (', text=' + Kotlin.toString(this.text)) + (', isVarArg=' + Kotlin.toString(this.isVarArg)) + ')';
  };
  TextTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.tokenType) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.isVarArg) | 0;
    return result;
  };
  TextTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.tokenType, other.tokenType) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.isVarArg, other.isVarArg)))));
  };
  function OperatorTexTalkNode(lhs, command, rhs) {
    this.lhs = lhs;
    this.command = command;
    this.rhs = rhs;
  }
  Object.defineProperty(OperatorTexTalkNode.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$Operator_getInstance();
    }
  });
  OperatorTexTalkNode.prototype.toCode_6z438g$$default = function (interceptor) {
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    var builder = StringBuilder_init();
    if (this.lhs != null) {
      builder.append_gw00v9$(this.lhs.toCode_6z438g$(interceptor));
      if (this.rhs != null) {
        builder.append_s8itvh$(32);
      }
    }
    builder.append_gw00v9$(this.command.toCode_6z438g$(interceptor));
    if (this.rhs != null) {
      if (this.lhs != null) {
        builder.append_s8itvh$(32);
      }
      builder.append_gw00v9$(this.rhs.toCode_6z438g$(interceptor));
    }
    return builder.toString();
  };
  OperatorTexTalkNode.prototype.forEach_j2ps96$ = function (fn) {
    if (this.lhs != null) {
      fn(this.lhs);
    }
    fn(this.command);
    if (this.rhs != null) {
      fn(this.rhs);
    }
  };
  OperatorTexTalkNode.prototype.transform_7szim8$ = function (transformer) {
    var tmp$, tmp$_0;
    return transformer(new OperatorTexTalkNode((tmp$ = this.lhs) != null ? tmp$.transform_7szim8$(transformer) : null, this.command.transform_7szim8$(transformer), (tmp$_0 = this.rhs) != null ? tmp$_0.transform_7szim8$(transformer) : null));
  };
  OperatorTexTalkNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OperatorTexTalkNode',
    interfaces: [TexTalkNode]
  };
  OperatorTexTalkNode.prototype.component1 = function () {
    return this.lhs;
  };
  OperatorTexTalkNode.prototype.component2 = function () {
    return this.command;
  };
  OperatorTexTalkNode.prototype.component3 = function () {
    return this.rhs;
  };
  OperatorTexTalkNode.prototype.copy_wvr5j1$ = function (lhs, command, rhs) {
    return new OperatorTexTalkNode(lhs === void 0 ? this.lhs : lhs, command === void 0 ? this.command : command, rhs === void 0 ? this.rhs : rhs);
  };
  OperatorTexTalkNode.prototype.toString = function () {
    return 'OperatorTexTalkNode(lhs=' + Kotlin.toString(this.lhs) + (', command=' + Kotlin.toString(this.command)) + (', rhs=' + Kotlin.toString(this.rhs)) + ')';
  };
  OperatorTexTalkNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lhs) | 0;
    result = result * 31 + Kotlin.hashCode(this.command) | 0;
    result = result * 31 + Kotlin.hashCode(this.rhs) | 0;
    return result;
  };
  OperatorTexTalkNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lhs, other.lhs) && Kotlin.equals(this.command, other.command) && Kotlin.equals(this.rhs, other.rhs)))));
  };
  function TexTalkToken(text, tokenType, row, column) {
    this.text = text;
    this.tokenType = tokenType;
    this.row = row;
    this.column = column;
  }
  Object.defineProperty(TexTalkToken.prototype, 'type', {
    get: function () {
      return TexTalkNodeType$Token_getInstance();
    }
  });
  TexTalkToken.prototype.toCode_6z438g$$default = function (interceptor) {
    var res = interceptor(this);
    if (res != null) {
      return res;
    }
    return this.text;
  };
  TexTalkToken.prototype.forEach_j2ps96$ = function (fn) {
  };
  TexTalkToken.prototype.transform_7szim8$ = function (transformer) {
    return transformer(this);
  };
  TexTalkToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TexTalkToken',
    interfaces: [TexTalkNode]
  };
  TexTalkToken.prototype.component1 = function () {
    return this.text;
  };
  TexTalkToken.prototype.component2 = function () {
    return this.tokenType;
  };
  TexTalkToken.prototype.component3 = function () {
    return this.row;
  };
  TexTalkToken.prototype.component4 = function () {
    return this.column;
  };
  TexTalkToken.prototype.copy_4t5bxk$ = function (text, tokenType, row, column) {
    return new TexTalkToken(text === void 0 ? this.text : text, tokenType === void 0 ? this.tokenType : tokenType, row === void 0 ? this.row : row, column === void 0 ? this.column : column);
  };
  TexTalkToken.prototype.toString = function () {
    return 'TexTalkToken(text=' + Kotlin.toString(this.text) + (', tokenType=' + Kotlin.toString(this.tokenType)) + (', row=' + Kotlin.toString(this.row)) + (', column=' + Kotlin.toString(this.column)) + ')';
  };
  TexTalkToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.tokenType) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    return result;
  };
  TexTalkToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.tokenType, other.tokenType) && Kotlin.equals(this.row, other.row) && Kotlin.equals(this.column, other.column)))));
  };
  function TexTalkTokenType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TexTalkTokenType_initFields() {
    TexTalkTokenType_initFields = function () {
    };
    TexTalkTokenType$Backslash_instance = new TexTalkTokenType('Backslash', 0);
    TexTalkTokenType$LParen_instance = new TexTalkTokenType('LParen', 1);
    TexTalkTokenType$RParen_instance = new TexTalkTokenType('RParen', 2);
    TexTalkTokenType$LSquare_instance = new TexTalkTokenType('LSquare', 3);
    TexTalkTokenType$RSquare_instance = new TexTalkTokenType('RSquare', 4);
    TexTalkTokenType$LCurly_instance = new TexTalkTokenType('LCurly', 5);
    TexTalkTokenType$RCurly_instance = new TexTalkTokenType('RCurly', 6);
    TexTalkTokenType$Operator_instance = new TexTalkTokenType('Operator', 7);
    TexTalkTokenType$Identifier_instance = new TexTalkTokenType('Identifier', 8);
    TexTalkTokenType$Comma_instance = new TexTalkTokenType('Comma', 9);
    TexTalkTokenType$Period_instance = new TexTalkTokenType('Period', 10);
    TexTalkTokenType$Colon_instance = new TexTalkTokenType('Colon', 11);
    TexTalkTokenType$Underscore_instance = new TexTalkTokenType('Underscore', 12);
    TexTalkTokenType$Caret_instance = new TexTalkTokenType('Caret', 13);
    TexTalkTokenType$ColonEquals_instance = new TexTalkTokenType('ColonEquals', 14);
    TexTalkTokenType$Is_instance = new TexTalkTokenType('Is', 15);
    TexTalkTokenType$DotDotDot_instance = new TexTalkTokenType('DotDotDot', 16);
    TexTalkTokenType$Invalid_instance = new TexTalkTokenType('Invalid', 17);
  }
  var TexTalkTokenType$Backslash_instance;
  function TexTalkTokenType$Backslash_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Backslash_instance;
  }
  var TexTalkTokenType$LParen_instance;
  function TexTalkTokenType$LParen_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$LParen_instance;
  }
  var TexTalkTokenType$RParen_instance;
  function TexTalkTokenType$RParen_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$RParen_instance;
  }
  var TexTalkTokenType$LSquare_instance;
  function TexTalkTokenType$LSquare_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$LSquare_instance;
  }
  var TexTalkTokenType$RSquare_instance;
  function TexTalkTokenType$RSquare_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$RSquare_instance;
  }
  var TexTalkTokenType$LCurly_instance;
  function TexTalkTokenType$LCurly_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$LCurly_instance;
  }
  var TexTalkTokenType$RCurly_instance;
  function TexTalkTokenType$RCurly_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$RCurly_instance;
  }
  var TexTalkTokenType$Operator_instance;
  function TexTalkTokenType$Operator_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Operator_instance;
  }
  var TexTalkTokenType$Identifier_instance;
  function TexTalkTokenType$Identifier_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Identifier_instance;
  }
  var TexTalkTokenType$Comma_instance;
  function TexTalkTokenType$Comma_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Comma_instance;
  }
  var TexTalkTokenType$Period_instance;
  function TexTalkTokenType$Period_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Period_instance;
  }
  var TexTalkTokenType$Colon_instance;
  function TexTalkTokenType$Colon_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Colon_instance;
  }
  var TexTalkTokenType$Underscore_instance;
  function TexTalkTokenType$Underscore_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Underscore_instance;
  }
  var TexTalkTokenType$Caret_instance;
  function TexTalkTokenType$Caret_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Caret_instance;
  }
  var TexTalkTokenType$ColonEquals_instance;
  function TexTalkTokenType$ColonEquals_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$ColonEquals_instance;
  }
  var TexTalkTokenType$Is_instance;
  function TexTalkTokenType$Is_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Is_instance;
  }
  var TexTalkTokenType$DotDotDot_instance;
  function TexTalkTokenType$DotDotDot_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$DotDotDot_instance;
  }
  var TexTalkTokenType$Invalid_instance;
  function TexTalkTokenType$Invalid_getInstance() {
    TexTalkTokenType_initFields();
    return TexTalkTokenType$Invalid_instance;
  }
  TexTalkTokenType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TexTalkTokenType',
    interfaces: [Enum]
  };
  function TexTalkTokenType$values() {
    return [TexTalkTokenType$Backslash_getInstance(), TexTalkTokenType$LParen_getInstance(), TexTalkTokenType$RParen_getInstance(), TexTalkTokenType$LSquare_getInstance(), TexTalkTokenType$RSquare_getInstance(), TexTalkTokenType$LCurly_getInstance(), TexTalkTokenType$RCurly_getInstance(), TexTalkTokenType$Operator_getInstance(), TexTalkTokenType$Identifier_getInstance(), TexTalkTokenType$Comma_getInstance(), TexTalkTokenType$Period_getInstance(), TexTalkTokenType$Colon_getInstance(), TexTalkTokenType$Underscore_getInstance(), TexTalkTokenType$Caret_getInstance(), TexTalkTokenType$ColonEquals_getInstance(), TexTalkTokenType$Is_getInstance(), TexTalkTokenType$DotDotDot_getInstance(), TexTalkTokenType$Invalid_getInstance()];
  }
  TexTalkTokenType.values = TexTalkTokenType$values;
  function TexTalkTokenType$valueOf(name) {
    switch (name) {
      case 'Backslash':
        return TexTalkTokenType$Backslash_getInstance();
      case 'LParen':
        return TexTalkTokenType$LParen_getInstance();
      case 'RParen':
        return TexTalkTokenType$RParen_getInstance();
      case 'LSquare':
        return TexTalkTokenType$LSquare_getInstance();
      case 'RSquare':
        return TexTalkTokenType$RSquare_getInstance();
      case 'LCurly':
        return TexTalkTokenType$LCurly_getInstance();
      case 'RCurly':
        return TexTalkTokenType$RCurly_getInstance();
      case 'Operator':
        return TexTalkTokenType$Operator_getInstance();
      case 'Identifier':
        return TexTalkTokenType$Identifier_getInstance();
      case 'Comma':
        return TexTalkTokenType$Comma_getInstance();
      case 'Period':
        return TexTalkTokenType$Period_getInstance();
      case 'Colon':
        return TexTalkTokenType$Colon_getInstance();
      case 'Underscore':
        return TexTalkTokenType$Underscore_getInstance();
      case 'Caret':
        return TexTalkTokenType$Caret_getInstance();
      case 'ColonEquals':
        return TexTalkTokenType$ColonEquals_getInstance();
      case 'Is':
        return TexTalkTokenType$Is_getInstance();
      case 'DotDotDot':
        return TexTalkTokenType$DotDotDot_getInstance();
      case 'Invalid':
        return TexTalkTokenType$Invalid_getInstance();
      default:throwISE('No enum constant mathlingua.common.textalk.TexTalkTokenType.' + name);
    }
  }
  TexTalkTokenType.valueOf_61zpoe$ = TexTalkTokenType$valueOf;
  function getTexTalkAncestry(root, node) {
    var path = ArrayList_init();
    getTexTalkAncestryImpl(root, node, path);
    if (!path.isEmpty()) {
      path.removeAt_za3lpa$(path.size - 1 | 0);
    }
    return reversed(path);
  }
  function getTexTalkAncestryImpl$lambda(closure$path, closure$node) {
    return function (it) {
      if (closure$path.isEmpty() || !equals(last(closure$path), closure$node)) {
        getTexTalkAncestryImpl(it, closure$node, closure$path);
      }
      return Unit;
    };
  }
  function getTexTalkAncestryImpl(root, node, path) {
    if (equals(root, node)) {
      path.add_11rb$(node);
      return;
    }
    path.add_11rb$(root);
    root.forEach_j2ps96$(getTexTalkAncestryImpl$lambda(path, node));
    if (path.isEmpty() || !equals(last(path), node)) {
      path.removeAt_za3lpa$(path.size - 1 | 0);
    }
  }
  function parseOperators(root) {
    var tmp$;
    try {
      var isRhsExpressions = findIsRhsExpressions(root);
      var idPrefixOpRoot = identifySpecialPrefixOperators(root, isRhsExpressions);
      var idPostfixOpRoot = identifySpecialPostfixOperators(idPrefixOpRoot, isRhsExpressions);
      var idInfixOpRoot = identifyInfixCommandOperators(idPostfixOpRoot, isRhsExpressions);
      var final = runShuntingYard(idInfixOpRoot, isRhsExpressions);
      var resultRoot = Kotlin.isType(tmp$ = final, ExpressionTexTalkNode) ? tmp$ : throwCCE();
      return new TexTalkParseResult(resultRoot, emptyList());
    }
     catch (e) {
      if (Kotlin.isType(e, ParseException)) {
        return new TexTalkParseResult(new ExpressionTexTalkNode(emptyList()), listOf(e.parseError));
      }
       else
        throw e;
    }
  }
  function ParseException(parseError) {
    Exception_init(parseError.message, this);
    this.parseError = parseError;
    this.name = 'ParseException';
  }
  ParseException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseException',
    interfaces: [Exception]
  };
  function findIsRhsExpressions(root) {
    var result = LinkedHashSet_init();
    findIsRhsExpressionsImpl(root, result);
    return result;
  }
  function findIsRhsExpressionsImpl$lambda(closure$result) {
    return function (it) {
      findIsRhsExpressionsImpl(it, closure$result);
      return Unit;
    };
  }
  function findIsRhsExpressionsImpl(node, result) {
    if (Kotlin.isType(node, IsTexTalkNode)) {
      result.addAll_brywnq$(node.rhs.items);
    }
    node.forEach_j2ps96$(findIsRhsExpressionsImpl$lambda(result));
  }
  function isSpecialOperator(node) {
    return node != null && Kotlin.isType(node, TextTexTalkNode) && (node.tokenType === TexTalkTokenType$Operator_getInstance() || node.tokenType === TexTalkTokenType$Caret_getInstance());
  }
  function identifySpecialPrefixOperators$lambda(closure$isNodeRhsExpressions) {
    return function (it) {
      if (Kotlin.isType(it, ExpressionTexTalkNode) && !closure$isNodeRhsExpressions.contains_11rb$(it)) {
        var newChildren = ArrayList_init();
        var i = 0;
        while (i < it.children.size) {
          var prev = getOrNull(it.children, i - 1 | 0);
          var cur = it.children.get_za3lpa$(i);
          var next = getOrNull(it.children, i + 1 | 0);
          i = i + 1 | 0;
          if (prev == null && isSpecialOperator(cur) && next == null) {
            throw new ParseException(new ParseError('An operator needs to have at least a left or ' + ("right side argument ('" + cur.toCode_6z438g$() + "')"), -1, -1));
          }
           else if ((isSpecialOperator(prev) || prev == null) && isSpecialOperator(cur) && !isSpecialOperator(next)) {
            newChildren.add_11rb$(new GroupTexTalkNode(TexTalkNodeType$SyntheticGroup_getInstance(), new ParametersTexTalkNode(listOf(new ExpressionTexTalkNode(listOf(new OperatorTexTalkNode(null, cur, next))))), false));
            i = i + 1 | 0;
          }
           else {
            newChildren.add_11rb$(cur);
          }
        }
        return new ExpressionTexTalkNode(newChildren);
      }
       else {
        return it;
      }
    };
  }
  function identifySpecialPrefixOperators(root, isNodeRhsExpressions) {
    var tmp$;
    return Kotlin.isType(tmp$ = root.transform_7szim8$(identifySpecialPrefixOperators$lambda(isNodeRhsExpressions)), ExpressionTexTalkNode) ? tmp$ : throwCCE();
  }
  function identifySpecialPostfixOperators$lambda(closure$isNodeRhsExpressions) {
    return function (it) {
      if (Kotlin.isType(it, ExpressionTexTalkNode) && !closure$isNodeRhsExpressions.contains_11rb$(it)) {
        var newChildren = ArrayList_init();
        var i = 0;
        while (i < it.children.size) {
          var cur = it.children.get_za3lpa$(i);
          var next = getOrNull(it.children, i + 1 | 0);
          var nextNext = getOrNull(it.children, i + 2 | 0);
          i = i + 1 | 0;
          if (!isSpecialOperator(cur) && isSpecialOperator(next) && (isSpecialOperator(nextNext) || nextNext == null)) {
            newChildren.add_11rb$(new GroupTexTalkNode(TexTalkNodeType$SyntheticGroup_getInstance(), new ParametersTexTalkNode(listOf(new ExpressionTexTalkNode(listOf(new OperatorTexTalkNode(cur, ensureNotNull(next), null))))), false));
            i = i + 1 | 0;
          }
           else {
            newChildren.add_11rb$(cur);
          }
        }
        return new ExpressionTexTalkNode(newChildren);
      }
       else {
        return it;
      }
    };
  }
  function identifySpecialPostfixOperators(root, isNodeRhsExpressions) {
    var tmp$;
    return Kotlin.isType(tmp$ = root.transform_7szim8$(identifySpecialPostfixOperators$lambda(isNodeRhsExpressions)), ExpressionTexTalkNode) ? tmp$ : throwCCE();
  }
  function identifyInfixCommandOperators$lambda(closure$isNodeRhsExpressions) {
    return function (it) {
      var tmp$;
      if (Kotlin.isType(it, ExpressionTexTalkNode) && !closure$isNodeRhsExpressions.contains_11rb$(it)) {
        var newChildren = ArrayList_init();
        var sections = splitBetweenInfixOperators(it.children);
        tmp$ = sections.iterator();
        while (tmp$.hasNext()) {
          var section = tmp$.next();
          if (section.isEmpty()) {
            throw new ParseException(new ParseError("Two infix operators cannot be side by side ('" + it.toCode_6z438g$() + "')", -1, -1));
          }
           else if (section.size === 1) {
            newChildren.add_11rb$(section.get_za3lpa$(0));
          }
           else if (section.size === 3) {
            var lhs = section.get_za3lpa$(0);
            var cmd = section.get_za3lpa$(1);
            var rhs = section.get_za3lpa$(2);
            if (!Kotlin.isType(cmd, Command)) {
              throw new ParseException(new ParseError('Expected an argument but found ' + cmd.toCode_6z438g$(), -1, -1));
            }
             else {
              newChildren.add_11rb$(new OperatorTexTalkNode(lhs, cmd, rhs));
            }
          }
           else if (section.size === 2 && Kotlin.isType(section.get_za3lpa$(1), GroupTexTalkNode) && section.get_za3lpa$(1).type === TexTalkNodeType$ParenGroup_getInstance()) {
            newChildren.add_11rb$(section.get_za3lpa$(1));
            newChildren.add_11rb$(section.get_za3lpa$(0));
          }
           else {
            throw new ParseException(new ParseError("Multiple infix operators cannot be side by side ('" + it.toCode_6z438g$() + "').  " + "They can only be one of the forms: '\\x \\op \\y', '\\x \\op y', 'x \\op \\y', or 'x \\op y'", -1, -1));
          }
        }
        return new ExpressionTexTalkNode(newChildren);
      }
       else {
        return it;
      }
    };
  }
  function identifyInfixCommandOperators(root, isNodeRhsExpressions) {
    return root.transform_7szim8$(identifyInfixCommandOperators$lambda(isNodeRhsExpressions));
  }
  function splitBetweenInfixOperators(nodes) {
    var tmp$, tmp$_0;
    var result = ArrayList_init();
    var i = 0;
    while (i < nodes.size) {
      var inner = ArrayList_init();
      while (i < nodes.size && !isSpecialOperator(nodes.get_za3lpa$(i))) {
        inner.add_11rb$(nodes.get_za3lpa$((tmp$ = i, i = tmp$ + 1 | 0, tmp$)));
      }
      result.add_11rb$(inner);
      if (i < nodes.size && isSpecialOperator(nodes.get_za3lpa$(i))) {
        result.add_11rb$(mutableListOf([nodes.get_za3lpa$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0))]));
      }
    }
    return result;
  }
  function Associativity(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Associativity_initFields() {
    Associativity_initFields = function () {
    };
    Associativity$Left_instance = new Associativity('Left', 0);
    Associativity$Right_instance = new Associativity('Right', 1);
    Associativity$Unknown_instance = new Associativity('Unknown', 2);
  }
  var Associativity$Left_instance;
  function Associativity$Left_getInstance() {
    Associativity_initFields();
    return Associativity$Left_instance;
  }
  var Associativity$Right_instance;
  function Associativity$Right_getInstance() {
    Associativity_initFields();
    return Associativity$Right_instance;
  }
  var Associativity$Unknown_instance;
  function Associativity$Unknown_getInstance() {
    Associativity_initFields();
    return Associativity$Unknown_instance;
  }
  Associativity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Associativity',
    interfaces: [Enum]
  };
  function Associativity$values() {
    return [Associativity$Left_getInstance(), Associativity$Right_getInstance(), Associativity$Unknown_getInstance()];
  }
  Associativity.values = Associativity$values;
  function Associativity$valueOf(name) {
    switch (name) {
      case 'Left':
        return Associativity$Left_getInstance();
      case 'Right':
        return Associativity$Right_getInstance();
      case 'Unknown':
        return Associativity$Unknown_getInstance();
      default:throwISE('No enum constant mathlingua.common.textalk.Associativity.' + name);
    }
  }
  Associativity.valueOf_61zpoe$ = Associativity$valueOf;
  function getPrecedence(node) {
    var tmp$;
    if (isSpecialOperator(node)) {
      var op = (Kotlin.isType(tmp$ = node, TextTexTalkNode) ? tmp$ : throwCCE()).text;
      if (equals(op, '+') || equals(op, '-'))
        return 1;
      else if (equals(op, '*') || equals(op, '/'))
        return 2;
      else if (equals(op, '^'))
        return 3;
      else
        return 0;
    }
     else if (Kotlin.isType(node, Command))
      return 0;
    else
      throw new ParseException(new ParseError("Cannot get precedence of node '" + node.toCode_6z438g$() + "'", -1, -1));
  }
  function getAssociativity(node) {
    var tmp$;
    if (isSpecialOperator(node)) {
      var op = (Kotlin.isType(tmp$ = node, TextTexTalkNode) ? tmp$ : throwCCE()).text;
      if (equals(op, '+') || equals(op, '-') || equals(op, '*') || equals(op, '/'))
        return Associativity$Left_getInstance();
      else if (equals(op, '^'))
        return Associativity$Right_getInstance();
      else
        return Associativity$Unknown_getInstance();
    }
     else
      return Associativity$Unknown_getInstance();
  }
  function runShuntingYard$lambda(closure$isNodeRhsExpressions) {
    return function (it) {
      if (Kotlin.isType(it, ExpressionTexTalkNode) && !closure$isNodeRhsExpressions.contains_11rb$(it)) {
        var postfix = toPostfixForm(it.children);
        return new ExpressionTexTalkNode(postfixToTree(postfix));
      }
       else {
        return it;
      }
    };
  }
  function runShuntingYard(root, isNodeRhsExpressions) {
    return root.transform_7szim8$(runShuntingYard$lambda(isNodeRhsExpressions));
  }
  function toPostfixForm(nodes) {
    var tmp$;
    var argStack = newStack();
    var opStack = newStack();
    tmp$ = nodes.iterator();
    while (tmp$.hasNext()) {
      var a = tmp$.next();
      if (!isSpecialOperator(a)) {
        argStack.push_11rb$(a);
        continue;
      }
      if (opStack.isEmpty()) {
        opStack.push_11rb$(a);
        continue;
      }
      var topOp = opStack.peek();
      var topPrec = getPrecedence(topOp);
      var curPrec = getPrecedence(a);
      if (topPrec < curPrec)
        opStack.push_11rb$(a);
      else if (topPrec > curPrec) {
        argStack.push_11rb$(opStack.pop());
        opStack.push_11rb$(a);
      }
       else {
        if (getAssociativity(topOp) === Associativity$Left_getInstance() || getAssociativity(topOp) === Associativity$Unknown_getInstance()) {
          argStack.push_11rb$(opStack.pop());
          opStack.push_11rb$(a);
        }
         else if (getAssociativity(topOp) === Associativity$Right_getInstance())
          opStack.push_11rb$(a);
      }
    }
    while (!opStack.isEmpty()) {
      argStack.push_11rb$(opStack.pop());
    }
    var result = ArrayList_init();
    while (!argStack.isEmpty()) {
      result.add_11rb$(argStack.pop());
    }
    reverse(result);
    return result;
  }
  function postfixToTree(nodes) {
    var tmp$;
    var stack = newStack();
    tmp$ = nodes.iterator();
    while (tmp$.hasNext()) {
      var n = tmp$.next();
      if (isSpecialOperator(n)) {
        if (stack.isEmpty()) {
          throw new ParseException(new ParseError('Expected two arguments for operator ' + n.toCode_6z438g$() + ' but found none', -1, -1));
        }
        var rhs = stack.pop();
        if (stack.isEmpty()) {
          throw new ParseException(new ParseError('Expected two arguments for operator ' + n.toCode_6z438g$() + ' but found one', -1, -1));
        }
        var lhs = stack.pop();
        stack.push_11rb$(new OperatorTexTalkNode(lhs, n, rhs));
      }
       else {
        stack.push_11rb$(n);
      }
    }
    var result = ArrayList_init();
    while (!stack.isEmpty()) {
      result.add_11rb$(stack.pop());
    }
    return result;
  }
  function TexTalkLexer() {
  }
  TexTalkLexer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TexTalkLexer',
    interfaces: []
  };
  function newTexTalkLexer(text) {
    return new TexTalkLexerImpl(text);
  }
  function TexTalkLexerImpl(text) {
    this.errors_rts390$_0 = ArrayList_init();
    this.tokens_0 = ArrayList_init();
    this.index_0 = 0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var i = 0;
    var line = 0;
    var column = -1;
    while (i < text.length) {
      var c = text.charCodeAt((tmp$ = i, i = tmp$ + 1 | 0, tmp$));
      column = column + 1 | 0;
      if (c === 10) {
        line = line + 1 | 0;
        column = 0;
      }
       else if (c === 92) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$Backslash_getInstance(), line, column));
      }
       else if (c === 105 && i < text.length && text.charCodeAt(i) === 115) {
        this.tokens_0.add_11rb$(new TexTalkToken('is', TexTalkTokenType$Is_getInstance(), line, column));
        i = i + 1 | 0;
        column = column + 1 | 0;
      }
       else if (c === 58 && i < text.length && text.charCodeAt(i) === 61) {
        this.tokens_0.add_11rb$(new TexTalkToken(':=', TexTalkTokenType$ColonEquals_getInstance(), line, column));
        i = i + 1 | 0;
        column = column + 1 | 0;
      }
       else if (c === 46 && i < text.length && text.charCodeAt(i) === 46 && (i + 1 | 0) < text.length && text.charCodeAt(i + 1 | 0) === 46) {
        var startLine = line;
        var startColumn = column;
        i = i + 2 | 0;
        column = column + 2 | 0;
        this.tokens_0.add_11rb$(new TexTalkToken('...', TexTalkTokenType$DotDotDot_getInstance(), startLine, startColumn));
      }
       else if (c === 58) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$Colon_getInstance(), line, column));
      }
       else if (c === 46) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$Period_getInstance(), line, column));
      }
       else if (c === 40) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$LParen_getInstance(), line, column));
      }
       else if (c === 41) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$RParen_getInstance(), line, column));
      }
       else if (c === 91) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$LSquare_getInstance(), line, column));
      }
       else if (c === 93) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$RSquare_getInstance(), line, column));
      }
       else if (c === 123) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$LCurly_getInstance(), line, column));
      }
       else if (c === 125) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$RCurly_getInstance(), line, column));
      }
       else if (c === 95) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$Underscore_getInstance(), line, column));
      }
       else if (c === 94) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$Caret_getInstance(), line, column));
      }
       else if (c === 44) {
        this.tokens_0.add_11rb$(new TexTalkToken('' + String.fromCharCode(toBoxedChar(c)), TexTalkTokenType$Comma_getInstance(), line, column));
      }
       else if (c === 63) {
        this.tokens_0.add_11rb$(new TexTalkToken(String.fromCharCode(c), TexTalkTokenType$Identifier_getInstance(), line, column));
      }
       else if (this.isIdentifierChar_0(c)) {
        var startLine_0 = line;
        var startColumn_0 = column;
        var id = new StringBuilder('' + String.fromCharCode(toBoxedChar(c)));
        while (i < text.length && this.isIdentifierChar_0(text.charCodeAt(i))) {
          id.append_s8itvh$(text.charCodeAt((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0)));
          column = column + 1 | 0;
        }
        if (i < text.length && text.charCodeAt(i) === 63) {
          id.append_s8itvh$(text.charCodeAt((tmp$_1 = i, i = tmp$_1 + 1 | 0, tmp$_1)));
          column = column + 1 | 0;
        }
        this.tokens_0.add_11rb$(new TexTalkToken(id.toString(), TexTalkTokenType$Identifier_getInstance(), startLine_0, startColumn_0));
      }
       else if (this.isOpChar_0(c)) {
        var startLine_1 = line;
        var startColumn_1 = column;
        var op = new StringBuilder('' + String.fromCharCode(toBoxedChar(c)));
        while (i < text.length && this.isOpChar_0(text.charCodeAt(i))) {
          op.append_s8itvh$(text.charCodeAt((tmp$_2 = i, i = tmp$_2 + 1 | 0, tmp$_2)));
          column = column + 1 | 0;
        }
        this.tokens_0.add_11rb$(new TexTalkToken(op.toString(), TexTalkTokenType$Operator_getInstance(), startLine_1, startColumn_1));
      }
       else if (c !== 32) {
        this.errors.add_11rb$(new ParseError('Unrecognized character ' + String.fromCharCode(c), line, column));
      }
    }
  }
  Object.defineProperty(TexTalkLexerImpl.prototype, 'errors', {
    get: function () {
      return this.errors_rts390$_0;
    }
  });
  TexTalkLexerImpl.prototype.hasNext = function () {
    return this.index_0 < this.tokens_0.size;
  };
  TexTalkLexerImpl.prototype.hasNextNext = function () {
    return (this.index_0 + 1 | 0) < this.tokens_0.size;
  };
  TexTalkLexerImpl.prototype.peek = function () {
    return this.tokens_0.get_za3lpa$(this.index_0);
  };
  TexTalkLexerImpl.prototype.peekPeek = function () {
    return this.tokens_0.get_za3lpa$(this.index_0 + 1 | 0);
  };
  TexTalkLexerImpl.prototype.next = function () {
    var result = this.peek();
    this.index_0 = this.index_0 + 1 | 0;
    return result;
  };
  TexTalkLexerImpl.prototype.isOpChar_0 = function (c) {
    return c === 33 || c === 64 || c === 37 || c === 38 || c === 42 || c === 45 || c === 43 || c === 61 || c === 124 || c === 47 || c === 60 || c === 62;
  };
  TexTalkLexerImpl.prototype.isIdentifierChar_0 = function (c) {
    return Regex_init('[$#a-zA-Z0-9]+').matches_6bul2c$(String.fromCharCode(c));
  };
  TexTalkLexerImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TexTalkLexerImpl',
    interfaces: [TexTalkLexer]
  };
  function TexTalkParser() {
  }
  TexTalkParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TexTalkParser',
    interfaces: []
  };
  function TexTalkParseResult(root, errors) {
    this.root = root;
    this.errors = errors;
  }
  TexTalkParseResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TexTalkParseResult',
    interfaces: []
  };
  TexTalkParseResult.prototype.component1 = function () {
    return this.root;
  };
  TexTalkParseResult.prototype.component2 = function () {
    return this.errors;
  };
  TexTalkParseResult.prototype.copy_9pmc8w$ = function (root, errors) {
    return new TexTalkParseResult(root === void 0 ? this.root : root, errors === void 0 ? this.errors : errors);
  };
  TexTalkParseResult.prototype.toString = function () {
    return 'TexTalkParseResult(root=' + Kotlin.toString(this.root) + (', errors=' + Kotlin.toString(this.errors)) + ')';
  };
  TexTalkParseResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.root) | 0;
    result = result * 31 + Kotlin.hashCode(this.errors) | 0;
    return result;
  };
  TexTalkParseResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.root, other.root) && Kotlin.equals(this.errors, other.errors)))));
  };
  function newTexTalkParser() {
    return new TexTalkParserImpl();
  }
  var INVALID_0;
  function TexTalkParserImpl() {
  }
  TexTalkParserImpl.prototype.parse_2mg13h$ = function (texTalkLexer) {
    var worker = new TexTalkParserImpl$ParserWorker(texTalkLexer);
    var root = worker.parse();
    var errors = worker.getErrors();
    var result = new TexTalkParseResult(root, errors);
    if (!errors.isEmpty()) {
      return result;
    }
    var operatorResult = parseOperators(result.root);
    if (!operatorResult.errors.isEmpty()) {
      return new TexTalkParseResult(result.root, plus(result.errors, operatorResult.errors));
    }
    return operatorResult;
  };
  function TexTalkParserImpl$ParserWorker(texTalkLexer) {
    this.texTalkLexer_0 = texTalkLexer;
    this.errors_0 = ArrayList_init();
  }
  TexTalkParserImpl$ParserWorker.prototype.getErrors = function () {
    return this.errors_0;
  };
  TexTalkParserImpl$ParserWorker.prototype.parse = function () {
    var tmp$, tmp$_0;
    var exp = (tmp$ = this.expression_0(null)) != null ? tmp$ : new ExpressionTexTalkNode(emptyList());
    return Kotlin.isType(tmp$_0 = this.resolveColonEqualsNode_0(this.resolveIsNode_0(exp)), ExpressionTexTalkNode) ? tmp$_0 : throwCCE();
  };
  TexTalkParserImpl$ParserWorker.prototype.resolveIsNode_0 = function (texTalkNode) {
    var tmp$;
    if (!Kotlin.isType(texTalkNode, ExpressionTexTalkNode)) {
      return texTalkNode;
    }
    var isIndex = -1;
    tmp$ = texTalkNode.children;
    for (var i = 0; i !== tmp$.size; ++i) {
      var child = texTalkNode.children.get_za3lpa$(i);
      if (Kotlin.isType(child, TextTexTalkNode) && child.type === TexTalkNodeType$Is_getInstance()) {
        if (isIndex < 0) {
          isIndex = i;
        }
         else {
          this.addError_0("A statement can only contain one 'is' statement");
        }
      }
    }
    if (isIndex < 0) {
      return texTalkNode;
    }
    var lhs = this.parameters_0(texTalkNode.children, 0, isIndex);
    var rhs = this.parameters_0(texTalkNode.children, isIndex + 1 | 0, texTalkNode.children.size);
    return new ExpressionTexTalkNode(listOf(new IsTexTalkNode(lhs, rhs)));
  };
  TexTalkParserImpl$ParserWorker.prototype.resolveColonEqualsNode_0 = function (texTalkNode) {
    var tmp$;
    if (!Kotlin.isType(texTalkNode, ExpressionTexTalkNode)) {
      return texTalkNode;
    }
    var colonEqualsIndex = -1;
    tmp$ = texTalkNode.children;
    for (var i = 0; i !== tmp$.size; ++i) {
      var child = texTalkNode.children.get_za3lpa$(i);
      if (Kotlin.isType(child, TextTexTalkNode) && child.type === TexTalkNodeType$ColonEquals_getInstance()) {
        if (colonEqualsIndex < 0) {
          colonEqualsIndex = i;
        }
         else {
          this.addError_0("A statement can only contain one ':='");
        }
      }
    }
    if (colonEqualsIndex < 0) {
      return texTalkNode;
    }
    var lhs = this.parameters_0(texTalkNode.children, 0, colonEqualsIndex);
    var rhs = this.parameters_0(texTalkNode.children, colonEqualsIndex + 1 | 0, texTalkNode.children.size);
    return new ExpressionTexTalkNode(listOf(new ColonEqualsTexTalkNode(lhs, rhs)));
  };
  TexTalkParserImpl$ParserWorker.prototype.parameters_0 = function (texTalkNodes, startInc, endEx) {
    var tmp$;
    var parts = ArrayList_init();
    var i = startInc;
    while (i < endEx) {
      var items = ArrayList_init();
      while (i < endEx && texTalkNodes.get_za3lpa$(i).type !== TexTalkNodeType$Comma_getInstance()) {
        items.add_11rb$(this.resolveIsNode_0(texTalkNodes.get_za3lpa$((tmp$ = i, i = tmp$ + 1 | 0, tmp$))));
      }
      if (i < endEx && texTalkNodes.get_za3lpa$(i).type !== TexTalkNodeType$Comma_getInstance()) {
        this.addError_0('Expected a Comma but found ' + texTalkNodes.get_za3lpa$(i).type);
      }
       else {
        i = i + 1 | 0;
      }
      parts.add_11rb$(new ExpressionTexTalkNode(items));
    }
    return new ParametersTexTalkNode(parts);
  };
  TexTalkParserImpl$ParserWorker.prototype.command_0 = function () {
    if (!this.has_0(TexTalkTokenType$Backslash_getInstance())) {
      return null;
    }
    var backSlash = this.expect_0(TexTalkTokenType$Backslash_getInstance());
    var parts = ArrayList_init();
    while (this.hasNext_0()) {
      var part = this.commandPart_0();
      if (part == null) {
        this.addError_1('Missing a command part', backSlash);
      }
       else {
        parts.add_11rb$(part);
      }
      if (this.has_0(TexTalkTokenType$Period_getInstance())) {
        this.expect_0(TexTalkTokenType$Period_getInstance());
      }
       else {
        break;
      }
    }
    if (parts.isEmpty()) {
      this.addError_1('Expected at least one command part', backSlash);
    }
    return new Command(parts);
  };
  TexTalkParserImpl$ParserWorker.prototype.commandPart_0 = function () {
    if (!this.has_0(TexTalkTokenType$Identifier_getInstance())) {
      return null;
    }
    var name = this.text_0(TexTalkTokenType$Identifier_getInstance(), TexTalkNodeType$Identifier_getInstance(), false);
    var square = this.group_0(TexTalkNodeType$SquareGroup_getInstance());
    var subSup = this.subSup_0();
    var groups = ArrayList_init();
    var startGroup = null;
    var paren = this.group_0(TexTalkNodeType$ParenGroup_getInstance());
    if (paren != null) {
      startGroup = paren;
    }
    if (startGroup == null) {
      var curly = this.group_0(TexTalkNodeType$CurlyGroup_getInstance());
      if (curly != null) {
        startGroup = curly;
      }
    }
    if (startGroup != null) {
      groups.add_11rb$(startGroup);
      while (this.hasNext_0()) {
        var grp = this.group_0(startGroup.type);
        if (grp == null)
          break;
        groups.add_11rb$(grp);
      }
    }
    var namedGroups = ArrayList_init();
    if (this.has_0(TexTalkTokenType$Colon_getInstance())) {
      this.expect_0(TexTalkTokenType$Colon_getInstance());
      while (this.hasNext_0()) {
        var namedGrp = this.namedGroup_0();
        if (namedGrp == null)
          break;
        namedGroups.add_11rb$(namedGrp);
      }
    }
    return new CommandPart(ensureNotNull(name), square, subSup, groups, namedGroups);
  };
  TexTalkParserImpl$ParserWorker.prototype.subSup_0 = function () {
    var tmp$;
    var sub = this.sub_0();
    var sup = this.sup_0();
    if (sub == null && sup == null) {
      tmp$ = null;
    }
     else
      tmp$ = new SubSupTexTalkNode(sub, sup);
    return tmp$;
  };
  TexTalkParserImpl$ParserWorker.prototype.sub_0 = function () {
    if (!this.has_0(TexTalkTokenType$Underscore_getInstance())) {
      return null;
    }
    var tmp$ = this.expect_0(TexTalkTokenType$Underscore_getInstance());
    var row = tmp$.component3()
    , column = tmp$.component4();
    var grp = null;
    if (this.has_0(TexTalkTokenType$Identifier_getInstance())) {
      var id = this.next_0();
      grp = new GroupTexTalkNode(TexTalkNodeType$CurlyGroup_getInstance(), new ParametersTexTalkNode(listOf(new ExpressionTexTalkNode(listOf(new TextTexTalkNode(TexTalkNodeType$Identifier_getInstance(), id.tokenType, id.text, false))))), false);
    }
    if (grp == null) {
      var curly = this.group_0(TexTalkNodeType$CurlyGroup_getInstance());
      if (curly != null) {
        grp = curly;
      }
    }
    if (grp == null) {
      var paren = this.group_0(TexTalkNodeType$ParenGroup_getInstance());
      if (paren != null) {
        grp = paren;
      }
    }
    if (grp == null) {
      this.addError_2('Expected a value with an underscore', row, column);
      grp = new GroupTexTalkNode(TexTalkNodeType$CurlyGroup_getInstance(), new ParametersTexTalkNode(emptyList()), false);
    }
    return grp;
  };
  TexTalkParserImpl$ParserWorker.prototype.sup_0 = function () {
    if (!this.has_0(TexTalkTokenType$Caret_getInstance())) {
      return null;
    }
    var tmp$ = this.expect_0(TexTalkTokenType$Caret_getInstance());
    var row = tmp$.component3()
    , column = tmp$.component4();
    var grp = null;
    if (this.has_0(TexTalkTokenType$Identifier_getInstance())) {
      var id = this.next_0();
      grp = new GroupTexTalkNode(TexTalkNodeType$CurlyGroup_getInstance(), new ParametersTexTalkNode(listOf(new ExpressionTexTalkNode(listOf(new TextTexTalkNode(TexTalkNodeType$Identifier_getInstance(), id.tokenType, id.text, false))))), false);
    }
    if (grp == null) {
      var curly = this.group_0(TexTalkNodeType$CurlyGroup_getInstance());
      if (curly != null) {
        grp = curly;
      }
    }
    if (grp == null) {
      var paren = this.group_0(TexTalkNodeType$ParenGroup_getInstance());
      if (paren != null) {
        grp = paren;
      }
    }
    if (grp == null) {
      this.addError_2('Expected a value with a caret', row, column);
      grp = new GroupTexTalkNode(TexTalkNodeType$CurlyGroup_getInstance(), new ParametersTexTalkNode(emptyList()), false);
    }
    return grp;
  };
  TexTalkParserImpl$ParserWorker.prototype.group_0 = function (nodeType) {
    var startType;
    var endType;
    switch (nodeType.name) {
      case 'ParenGroup':
        startType = TexTalkTokenType$LParen_getInstance();
        endType = TexTalkTokenType$RParen_getInstance();
        break;
      case 'SquareGroup':
        startType = TexTalkTokenType$LSquare_getInstance();
        endType = TexTalkTokenType$RSquare_getInstance();
        break;
      case 'CurlyGroup':
        startType = TexTalkTokenType$LCurly_getInstance();
        endType = TexTalkTokenType$RCurly_getInstance();
        break;
      default:throw RuntimeException_init('Unrecognized group type ' + nodeType);
    }
    if (!this.has_0(startType)) {
      return null;
    }
    var expressions = ArrayList_init();
    this.expect_0(startType);
    var terminators = HashSet_init();
    terminators.add_11rb$(TexTalkTokenType$Comma_getInstance());
    terminators.add_11rb$(endType);
    var firstExp = this.expression_0(terminators);
    if (firstExp != null) {
      expressions.add_11rb$(firstExp);
    }
    while (this.has_0(TexTalkTokenType$Comma_getInstance())) {
      this.next_0();
      var exp = this.expression_0(terminators);
      if (exp == null)
        break;
      expressions.add_11rb$(exp);
    }
    this.expect_0(endType);
    var isVarArg = this.has_0(TexTalkTokenType$DotDotDot_getInstance());
    if (isVarArg) {
      this.next_0();
    }
    return new GroupTexTalkNode(nodeType, new ParametersTexTalkNode(expressions), isVarArg);
  };
  TexTalkParserImpl$ParserWorker.prototype.namedGroup_0 = function () {
    var tmp$, tmp$_0;
    if (!this.hasHas_0(TexTalkTokenType$Identifier_getInstance(), TexTalkTokenType$LCurly_getInstance())) {
      return null;
    }
    var rawText = this.text_0(TexTalkTokenType$Identifier_getInstance(), TexTalkNodeType$Identifier_getInstance(), false);
    if (rawText != null) {
      tmp$ = rawText;
    }
     else {
      this.addError_0('Expected an identifier in a named group');
      tmp$ = new TextTexTalkNode(TexTalkNodeType$Identifier_getInstance(), TexTalkTokenType$Invalid_getInstance(), 'INVALID', false);
    }
    var text = tmp$;
    var rawGroup = this.group_0(TexTalkNodeType$CurlyGroup_getInstance());
    if (rawGroup != null) {
      tmp$_0 = rawGroup;
    }
     else {
      this.addError_0('Expected a group in a named group');
      tmp$_0 = new GroupTexTalkNode(TexTalkNodeType$CurlyGroup_getInstance(), new ParametersTexTalkNode(emptyList()), false);
    }
    var group = tmp$_0;
    return new NamedGroupTexTalkNode(text, group);
  };
  TexTalkParserImpl$ParserWorker.prototype.text_0 = function (tokenType, nodeType, canBeVarArg) {
    if (!this.has_0(tokenType)) {
      return null;
    }
    var textToken = this.next_0();
    var nextIsDotDotDot = this.has_0(TexTalkTokenType$DotDotDot_getInstance());
    var isVarArg = false;
    if (canBeVarArg) {
      if (nextIsDotDotDot) {
        isVarArg = true;
      }
    }
     else {
      if (nextIsDotDotDot) {
        this.addError_1('Unexpected ... suffix', textToken);
      }
    }
    if (nextIsDotDotDot) {
      this.next_0();
    }
    return new TextTexTalkNode(nodeType, tokenType, textToken.text, isVarArg);
  };
  TexTalkParserImpl$ParserWorker.prototype.expression_0 = function (terminators) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var nodes = ArrayList_init();
    while (this.hasNext_0() && (terminators == null || !terminators.contains_11rb$(this.texTalkLexer_0.peek().tokenType))) {
      var child = (tmp$_7 = (tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.command_0()) != null ? tmp$ : this.group_0(TexTalkNodeType$ParenGroup_getInstance())) != null ? tmp$_0 : this.group_0(TexTalkNodeType$CurlyGroup_getInstance())) != null ? tmp$_1 : this.text_0(TexTalkTokenType$Is_getInstance(), TexTalkNodeType$Is_getInstance(), false)) != null ? tmp$_2 : this.text_0(TexTalkTokenType$Identifier_getInstance(), TexTalkNodeType$Identifier_getInstance(), true)) != null ? tmp$_3 : this.text_0(TexTalkTokenType$Operator_getInstance(), TexTalkNodeType$Operator_getInstance(), false)) != null ? tmp$_4 : this.text_0(TexTalkTokenType$Comma_getInstance(), TexTalkNodeType$Comma_getInstance(), false)) != null ? tmp$_5 : this.text_0(TexTalkTokenType$Caret_getInstance(), TexTalkNodeType$Operator_getInstance(), false)) != null ? tmp$_6 : this.text_0(TexTalkTokenType$Underscore_getInstance(), TexTalkNodeType$Operator_getInstance(), false)) != null ? tmp$_7 : this.text_0(TexTalkTokenType$ColonEquals_getInstance(), TexTalkNodeType$ColonEquals_getInstance(), false);
      if (child == null) {
        var peek = this.texTalkLexer_0.peek();
        this.addError_1('Unexpected token ' + peek.text, peek);
        this.next_0();
      }
       else {
        nodes.add_11rb$(child);
      }
    }
    if (nodes.isEmpty()) {
      tmp$_8 = null;
    }
     else
      tmp$_8 = new ExpressionTexTalkNode(nodes);
    return tmp$_8;
  };
  TexTalkParserImpl$ParserWorker.prototype.expect_0 = function (tokenType) {
    var tmp$;
    if (this.has_0(tokenType)) {
      return this.next_0();
    }
     else {
      if (this.hasNext_0()) {
        tmp$ = "Expected a token of type '" + tokenType + "' but found type " + ("'" + this.texTalkLexer_0.peek().type + "' for text '" + this.texTalkLexer_0.peek().text + "' ") + ('(Line: ' + (this.texTalkLexer_0.peek().row + 1 | 0) + ', Column: ' + (this.texTalkLexer_0.peek().column + 1 | 0) + ')');
      }
       else {
        tmp$ = 'Expected a token of type ' + tokenType + ' but found the end of input';
      }
      var message = tmp$;
      this.addError_0(message);
      return INVALID_0;
    }
  };
  TexTalkParserImpl$ParserWorker.prototype.hasNext_0 = function () {
    return this.texTalkLexer_0.hasNext();
  };
  TexTalkParserImpl$ParserWorker.prototype.next_0 = function () {
    return this.texTalkLexer_0.next();
  };
  TexTalkParserImpl$ParserWorker.prototype.has_0 = function (tokenType) {
    return this.hasNext_0() && this.texTalkLexer_0.peek().tokenType === tokenType;
  };
  TexTalkParserImpl$ParserWorker.prototype.hasHas_0 = function (tokenType1, tokenType2) {
    return this.has_0(tokenType1) && this.texTalkLexer_0.hasNextNext() && this.texTalkLexer_0.peekPeek().tokenType === tokenType2;
  };
  TexTalkParserImpl$ParserWorker.prototype.addError_1 = function (message, token) {
    return this.addError_2(message, token.row, token.column);
  };
  TexTalkParserImpl$ParserWorker.prototype.addError_0 = function (message) {
    return this.addError_2(message, -1, -1);
  };
  TexTalkParserImpl$ParserWorker.prototype.addError_2 = function (message, row, column) {
    return this.errors_0.add_11rb$(new ParseError(message, row, column));
  };
  TexTalkParserImpl$ParserWorker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserWorker',
    interfaces: []
  };
  TexTalkParserImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TexTalkParserImpl',
    interfaces: [TexTalkParser]
  };
  function RootTarget(root, target) {
    this.root = root;
    this.target = target;
  }
  RootTarget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootTarget',
    interfaces: []
  };
  RootTarget.prototype.component1 = function () {
    return this.root;
  };
  RootTarget.prototype.component2 = function () {
    return this.target;
  };
  RootTarget.prototype.copy_xwzc9p$ = function (root, target) {
    return new RootTarget(root === void 0 ? this.root : root, target === void 0 ? this.target : target);
  };
  RootTarget.prototype.toString = function () {
    return 'RootTarget(root=' + Kotlin.toString(this.root) + (', target=' + Kotlin.toString(this.target)) + ')';
  };
  RootTarget.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.root) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    return result;
  };
  RootTarget.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.root, other.root) && Kotlin.equals(this.target, other.target)))));
  };
  function locateAllCommands(phase2Node) {
    var root = phase2Node;
    root = separateIsStatements(root, root).root;
    root = separateInfixOperatorStatements(root, root).root;
    root = glueCommands(root, root).root;
    var commands = ArrayList_init();
    findCommandsImpl(root, commands);
    return commands;
  }
  function findCommandsImpl$lambda(closure$commands) {
    return function (it) {
      if (Kotlin.isType(it, Statement)) {
        if (Kotlin.isType(it.texTalkRoot, ValidationSuccess)) {
          findCommandsImpl_0(it.texTalkRoot.value, closure$commands);
        }
      }
       else {
        findCommandsImpl(it, closure$commands);
      }
      return Unit;
    };
  }
  function findCommandsImpl(phase2Node, commands) {
    phase2Node.forEach_s8izwl$(findCommandsImpl$lambda(commands));
  }
  function findCommands(texTalkNode) {
    var commands = ArrayList_init();
    findCommandsImpl_0(texTalkNode, commands);
    return distinct(commands);
  }
  function replaceSignatures$lambda(closure$signature, closure$replacement, closure$texTalkNode) {
    return function (it) {
      if (Kotlin.isType(it, Command) && equals(signature_0(it), closure$signature)) {
        return new TextTexTalkNode(TexTalkNodeType$Identifier_getInstance(), TexTalkTokenType$Identifier_getInstance(), closure$replacement, false);
      }
       else {
        return closure$texTalkNode;
      }
    };
  }
  function replaceSignatures(texTalkNode, signature, replacement) {
    return texTalkNode.transform_7szim8$(replaceSignatures$lambda(signature, replacement, texTalkNode));
  }
  function replaceCommands$lambda(closure$shouldProcessChalk, closure$cmdToReplacement, closure$shouldProcessTex) {
    return function (it) {
      var tmp$;
      if (!closure$shouldProcessChalk(it) || !Kotlin.isType(it, Statement)) {
        return it;
      }
       else {
        var validation = it.texTalkRoot;
        if (Kotlin.isType(validation, ValidationFailure))
          return it;
        else if (Kotlin.isType(validation, ValidationSuccess)) {
          var root = validation.value;
          var newRoot = Kotlin.isType(tmp$ = replaceCommands_0(root, root, closure$cmdToReplacement, closure$shouldProcessTex), ExpressionTexTalkNode) ? tmp$ : throwCCE();
          return new Statement(newRoot.toCode_6z438g$(), validationSuccess(newRoot));
        }
         else
          return Kotlin.noWhenBranchMatched();
      }
    };
  }
  function replaceCommands(node, cmdToReplacement, shouldProcessChalk, shouldProcessTex) {
    return node.transform_ql661s$(replaceCommands$lambda(shouldProcessChalk, cmdToReplacement, shouldProcessTex));
  }
  function replaceCommands$lambda_0(closure$shouldProcess, closure$root, closure$cmdToReplacement) {
    return function (it) {
      if (!closure$shouldProcess(closure$root, it) || !Kotlin.isType(it, Command)) {
        return it;
      }
       else {
        if (!closure$cmdToReplacement.containsKey_11rb$(it)) {
          return it;
        }
         else {
          var name = closure$cmdToReplacement.get_11rb$(it);
          return new TextTexTalkNode(TexTalkNodeType$Identifier_getInstance(), TexTalkTokenType$Identifier_getInstance(), ensureNotNull(name), false);
        }
      }
    };
  }
  function replaceCommands_0(texTalkNode, root, cmdToReplacement, shouldProcess) {
    return texTalkNode.transform_7szim8$(replaceCommands$lambda_0(shouldProcess, root, cmdToReplacement));
  }
  function findCommandsImpl$lambda_0(closure$commands) {
    return function (it) {
      findCommandsImpl_0(it, closure$commands);
      return Unit;
    };
  }
  function findCommandsImpl_0(texTalkNode, commands) {
    if (Kotlin.isType(texTalkNode, Command)) {
      commands.add_11rb$(texTalkNode);
    }
    texTalkNode.forEach_j2ps96$(findCommandsImpl$lambda_0(commands));
  }
  function separateIsStatements$lambda(closure$newFollow, closure$follow) {
    return function (it) {
      var tmp$, tmp$_0;
      if (Kotlin.isType(it, ClauseListNode)) {
        var newClauses = ArrayList_init();
        tmp$ = it.clauses.iterator();
        while (tmp$.hasNext()) {
          var clause = tmp$.next();
          if (Kotlin.isType(clause, Statement)) {
            var separated = findSeparatedIsNodes(clause);
            if (separated == null) {
              newClauses.add_11rb$(clause);
            }
             else {
              var destination = ArrayList_init_0(collectionSizeOrDefault(separated, 10));
              var tmp$_1;
              tmp$_1 = separated.iterator();
              while (tmp$_1.hasNext()) {
                var item = tmp$_1.next();
                var tmp$_2 = destination.add_11rb$;
                var expRoot = new ExpressionTexTalkNode(listOf(item));
                tmp$_2.call(destination, new Statement(expRoot.toCode_6z438g$(), validationSuccess(expRoot)));
              }
              newClauses.addAll_brywnq$(destination);
            }
          }
           else {
            newClauses.add_11rb$(clause);
          }
        }
        var result = new ClauseListNode(newClauses);
        if (closure$newFollow.v == null && hasChild(it, closure$follow)) {
          closure$newFollow.v = result;
        }
        tmp$_0 = result;
      }
       else {
        tmp$_0 = it;
      }
      var result_0 = tmp$_0;
      return result_0;
    };
  }
  function separateIsStatements(root, follow) {
    var tmp$;
    var newFollow = {v: null};
    var newRoot = root.transform_ql661s$(separateIsStatements$lambda(newFollow, follow));
    return new RootTarget(newRoot, (tmp$ = newFollow.v) != null ? tmp$ : follow);
  }
  function findSeparatedIsNodes(node) {
    var tmp$;
    var validation = node.texTalkRoot;
    if (Kotlin.isType(validation, ValidationFailure))
      return null;
    else if (Kotlin.isType(validation, ValidationSuccess)) {
      var root = validation.value;
      if (root.children.size === 1 && Kotlin.isType(root.children.get_za3lpa$(0), IsTexTalkNode)) {
        var isNode = Kotlin.isType(tmp$ = root.children.get_za3lpa$(0), IsTexTalkNode) ? tmp$ : throwCCE();
        return separateIsStatementsUnder(isNode);
      }
       else {
        return null;
      }
    }
     else
      return Kotlin.noWhenBranchMatched();
  }
  function separateIsStatementsUnder(isNode) {
    var tmp$, tmp$_0;
    var result = ArrayList_init();
    tmp$ = isNode.lhs.items.iterator();
    while (tmp$.hasNext()) {
      var left = tmp$.next();
      tmp$_0 = isNode.rhs.items.iterator();
      while (tmp$_0.hasNext()) {
        var right = tmp$_0.next();
        result.add_11rb$(new IsTexTalkNode(new ParametersTexTalkNode(listOf(left)), new ParametersTexTalkNode(listOf(right))));
      }
    }
    return result;
  }
  function glueCommands$lambda(closure$newFollow, closure$follow) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var tmp$_4 = Kotlin.isType(it, Statement) && Kotlin.isType(it.texTalkRoot, ValidationSuccess) && it.texTalkRoot.value.children.size === 1 && Kotlin.isType(it.texTalkRoot.value.children.get_za3lpa$(0), IsTexTalkNode);
      if (tmp$_4) {
        var tmp$_5;
        if ((tmp$_1 = (tmp$_0 = getOrNull((Kotlin.isType(tmp$ = it.texTalkRoot.value.children.get_za3lpa$(0), IsTexTalkNode) ? tmp$ : throwCCE()).rhs.items, 0)) != null ? tmp$_0.children : null) != null) {
          var all$result;
          all$break: do {
            var tmp$_6;
            if (Kotlin.isType(tmp$_1, Collection) && tmp$_1.isEmpty()) {
              all$result = true;
              break all$break;
            }
            tmp$_6 = tmp$_1.iterator();
            while (tmp$_6.hasNext()) {
              var element = tmp$_6.next();
              if (!Kotlin.isType(element, Command)) {
                all$result = false;
                break all$break;
              }
            }
            all$result = true;
          }
           while (false);
          tmp$_5 = all$result;
        }
         else
          tmp$_5 = null;
        tmp$_4 = tmp$_5 === true;
      }
      if (tmp$_4) {
        var isNode = Kotlin.isType(tmp$_2 = it.texTalkRoot.value.children.get_za3lpa$(0), IsTexTalkNode) ? tmp$_2 : throwCCE();
        if (isNode.rhs.items.size !== 1) {
          throw Error_init("Expected 'is' node " + isNode + ' to only contain a single rhs item');
        }
        var cmds = getCommandsToGlue(isNode.rhs.items.get_za3lpa$(0));
        var gluedCmds = glueCommands_0(cmds);
        if (gluedCmds.size !== 1) {
          throw Error_init("Expected 'is' node " + isNode + ' to have only one glued rhs command');
        }
        var newExp = new ExpressionTexTalkNode(listOf(new IsTexTalkNode(isNode.lhs, new ParametersTexTalkNode(listOf(new ExpressionTexTalkNode(listOf(gluedCmds.get_za3lpa$(0))))))));
        var result = new Statement(newExp.toCode_6z438g$(), validationSuccess(newExp));
        if (closure$newFollow.v == null && hasChild(it, closure$follow)) {
          closure$newFollow.v = result;
        }
        tmp$_3 = result;
      }
       else {
        tmp$_3 = it;
      }
      var result_0 = tmp$_3;
      return result_0;
    };
  }
  function glueCommands(root, follow) {
    var tmp$;
    var newFollow = {v: null};
    var newRoot = root.transform_ql661s$(glueCommands$lambda(newFollow, follow));
    return new RootTarget(newRoot, (tmp$ = newFollow.v) != null ? tmp$ : follow);
  }
  function getCommandsToGlue(node) {
    var tmp$;
    var cmds = ArrayList_init();
    tmp$ = node.children.iterator();
    while (tmp$.hasNext()) {
      var n = tmp$.next();
      if (!Kotlin.isType(n, Command)) {
        throw Error_init('Unexpected non-Command node');
      }
      cmds.add_11rb$(n);
    }
    return glueCommands_0(cmds);
  }
  function glueCommands_0(commands) {
    var tmp$;
    if (commands.isEmpty()) {
      return emptyList();
    }
    if (commands.size === 1) {
      return listOf(first(commands));
    }
    var last_0 = last(commands);
    var newCommands = ArrayList_init();
    tmp$ = commands.size - 1 | 0;
    for (var i = 0; i < tmp$; i++) {
      var cmd = commands.get_za3lpa$(i);
      var parts = ArrayList_init();
      parts.addAll_brywnq$(cmd.parts);
      parts.addAll_brywnq$(last_0.parts);
      newCommands.add_11rb$(new Command(parts));
    }
    return newCommands;
  }
  function signature($receiver) {
    var tmp$;
    tmp$ = $receiver.command;
    if (Kotlin.isType(tmp$, Command))
      return signature_0($receiver.command);
    else if (Kotlin.isType(tmp$, TextTexTalkNode))
      return $receiver.command.text;
    else
      throw RuntimeException_init('Cannot get a signature of an ' + ('operator with command ' + $receiver.command.toCode_6z438g$()));
  }
  function signature_0($receiver) {
    var tmp$;
    var builder = StringBuilder_init();
    builder.append_s8itvh$(92);
    tmp$ = $receiver.parts;
    for (var i = 0; i !== tmp$.size; ++i) {
      if (i > 0) {
        builder.append_s8itvh$(46);
      }
      builder.append_gw00v9$(signature_2($receiver.parts.get_za3lpa$(i)));
    }
    return builder.toString();
  }
  function signature_1($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.texTalkRoot;
    if (Kotlin.isType(tmp$, ValidationFailure))
      return null;
    else if (Kotlin.isType(tmp$, ValidationSuccess)) {
      var root = $receiver.texTalkRoot.value;
      if (root.children.size === 1 && Kotlin.isType(root.children.get_za3lpa$(0), Command)) {
        return signature_0(Kotlin.isType(tmp$_0 = root.children.get_za3lpa$(0), Command) ? tmp$_0 : throwCCE());
      }
       else if (root.children.size === 1 && Kotlin.isType(root.children.get_za3lpa$(0), OperatorTexTalkNode)) {
        return signature(Kotlin.isType(tmp$_1 = root.children.get_za3lpa$(0), OperatorTexTalkNode) ? tmp$_1 : throwCCE());
      }
       else {
        return null;
      }
    }
     else
      return Kotlin.noWhenBranchMatched();
  }
  function Substitutions(doesMatch, substitutions, errors) {
    this.doesMatch = doesMatch;
    this.substitutions = substitutions;
    this.errors = errors;
  }
  Substitutions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Substitutions',
    interfaces: []
  };
  Substitutions.prototype.component1 = function () {
    return this.doesMatch;
  };
  Substitutions.prototype.component2 = function () {
    return this.substitutions;
  };
  Substitutions.prototype.component3 = function () {
    return this.errors;
  };
  Substitutions.prototype.copy_fr15pl$ = function (doesMatch, substitutions, errors) {
    return new Substitutions(doesMatch === void 0 ? this.doesMatch : doesMatch, substitutions === void 0 ? this.substitutions : substitutions, errors === void 0 ? this.errors : errors);
  };
  Substitutions.prototype.toString = function () {
    return 'Substitutions(doesMatch=' + Kotlin.toString(this.doesMatch) + (', substitutions=' + Kotlin.toString(this.substitutions)) + (', errors=' + Kotlin.toString(this.errors)) + ')';
  };
  Substitutions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.doesMatch) | 0;
    result = result * 31 + Kotlin.hashCode(this.substitutions) | 0;
    result = result * 31 + Kotlin.hashCode(this.errors) | 0;
    return result;
  };
  Substitutions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.doesMatch, other.doesMatch) && Kotlin.equals(this.substitutions, other.substitutions) && Kotlin.equals(this.errors, other.errors)))));
  };
  function getSubstitutions(pattern, value) {
    var tmp$;
    var subs = new MutableSubstitutions(true, LinkedHashMap_init(), ArrayList_init());
    if (pattern.lhs == null !== (value.lhs == null)) {
      subs.doesMatch = false;
      return subs.toImmutable();
    }
    if (pattern.lhs != null) {
      if (!Kotlin.isType(pattern.lhs, TextTexTalkNode)) {
        subs.doesMatch = false;
        subs.errors.add_11rb$('The left-hand-side of an infix operator ' + ('pattern must be an identifier but found ' + pattern.lhs.toCode_6z438g$()));
        return subs.toImmutable();
      }
      var $receiver = subs.substitutions;
      var key = pattern.lhs.text;
      var value_0 = mutableListOf([ensureNotNull(value.lhs)]);
      $receiver.put_xwzc9p$(key, value_0);
    }
    if (pattern.rhs == null !== (value.rhs == null)) {
      subs.doesMatch = false;
      return subs.toImmutable();
    }
    if (pattern.rhs != null) {
      if (!Kotlin.isType(pattern.rhs, TextTexTalkNode)) {
        subs.doesMatch = false;
        subs.errors.add_11rb$('The right-hand-side of an infix operator ' + ('pattern must be an identifier but found ' + pattern.rhs.toCode_6z438g$()));
        return subs.toImmutable();
      }
      var $receiver_0 = subs.substitutions;
      var key_0 = pattern.rhs.text;
      var value_1 = mutableListOf([ensureNotNull(value.rhs)]);
      $receiver_0.put_xwzc9p$(key_0, value_1);
    }
    if (Kotlin.isType(pattern.command, TextTexTalkNode) && Kotlin.isType(value.command, TextTexTalkNode)) {
      if (!equals(pattern.command.text, value.command.text)) {
        subs.doesMatch = false;
      }
      return subs.toImmutable();
    }
    if (Kotlin.isType(pattern.command, Command) && Kotlin.isType(value.command, Command)) {
      var cmdSubs = getSubstitutions_0(pattern.command, value.command);
      subs.errors.addAll_brywnq$(cmdSubs.errors);
      subs.doesMatch = (subs.doesMatch && cmdSubs.doesMatch);
      tmp$ = cmdSubs.substitutions.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var name = tmp$_0.key;
        var values = tmp$_0.value;
        var $receiver_1 = subs.substitutions;
        var value_2 = toMutableList(values);
        $receiver_1.put_xwzc9p$(name, value_2);
      }
      return subs.toImmutable();
    }
    throw RuntimeException_init('Encountered a pattern or value operator with a ' + ('command that is an expression.  Pattern: ' + pattern.toCode_6z438g$() + ', Value: ' + value.toCode_6z438g$()));
  }
  function getSubstitutions_0(pattern, value) {
    var tmp$;
    var errors = validatePattern(pattern);
    if (!errors.isEmpty()) {
      return new Substitutions(false, emptyMap(), errors);
    }
    var subs = new MutableSubstitutions(true, LinkedHashMap_init(), ArrayList_init());
    if (pattern.parts.size === value.parts.size) {
      tmp$ = pattern.parts;
      for (var i = 0; i !== tmp$.size; ++i) {
        findSubstitutions_0(pattern.parts.get_za3lpa$(i), value.parts.get_za3lpa$(i), subs);
      }
    }
    return subs.toImmutable();
  }
  function expandAsWritten(node, operatorPatternToExpansion) {
    var tmp$;
    var sigToPatternExpansion = LinkedHashMap_init();
    tmp$ = operatorPatternToExpansion.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var opPattern = tmp$_0.key;
      var expansion = tmp$_0.value;
      var key = signature(opPattern);
      var value = new PatternExpansion(opPattern, expansion);
      sigToPatternExpansion.put_xwzc9p$(key, value);
    }
    return expandAsWrittenImpl(node, sigToPatternExpansion);
  }
  function MutableSubstitutions(doesMatch, substitutions, errors) {
    this.doesMatch = doesMatch;
    this.substitutions = substitutions;
    this.errors = errors;
  }
  MutableSubstitutions.prototype.toImmutable = function () {
    return new Substitutions(this.doesMatch, this.substitutions, this.errors);
  };
  MutableSubstitutions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableSubstitutions',
    interfaces: []
  };
  MutableSubstitutions.prototype.component1 = function () {
    return this.doesMatch;
  };
  MutableSubstitutions.prototype.component2 = function () {
    return this.substitutions;
  };
  MutableSubstitutions.prototype.component3 = function () {
    return this.errors;
  };
  MutableSubstitutions.prototype.copy_pgx6c2$ = function (doesMatch, substitutions, errors) {
    return new MutableSubstitutions(doesMatch === void 0 ? this.doesMatch : doesMatch, substitutions === void 0 ? this.substitutions : substitutions, errors === void 0 ? this.errors : errors);
  };
  MutableSubstitutions.prototype.toString = function () {
    return 'MutableSubstitutions(doesMatch=' + Kotlin.toString(this.doesMatch) + (', substitutions=' + Kotlin.toString(this.substitutions)) + (', errors=' + Kotlin.toString(this.errors)) + ')';
  };
  MutableSubstitutions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.doesMatch) | 0;
    result = result * 31 + Kotlin.hashCode(this.substitutions) | 0;
    result = result * 31 + Kotlin.hashCode(this.errors) | 0;
    return result;
  };
  MutableSubstitutions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.doesMatch, other.doesMatch) && Kotlin.equals(this.substitutions, other.substitutions) && Kotlin.equals(this.errors, other.errors)))));
  };
  function signature_2($receiver) {
    var tmp$;
    var builder = StringBuilder_init();
    builder.append_gw00v9$($receiver.name.text);
    tmp$ = $receiver.namedGroups.iterator();
    while (tmp$.hasNext()) {
      var grp = tmp$.next();
      builder.append_s8itvh$(58);
      builder.append_gw00v9$(grp.name.text);
    }
    return builder.toString();
  }
  function findSubstitutions(pattern, value, subs) {
    var tmp$, tmp$_0;
    if (pattern == null !== (value == null)) {
      subs.doesMatch = false;
      if (pattern == null) {
        subs.errors.add_11rb$("Unexpected group '" + toString(value != null ? value.toCode_6z438g$() : null) + "'");
      }
       else {
        subs.errors.add_11rb$("Unexpected a match for '" + pattern.toCode_6z438g$() + "'");
      }
      return;
    }
    if (pattern == null || value == null) {
      return;
    }
    var $receiver = pattern.parameters.items;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2;
      destination.add_11rb$(Kotlin.isType(tmp$_2 = item.children.get_za3lpa$(0), TextTexTalkNode) ? tmp$_2 : throwCCE());
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_3;
    tmp$_3 = destination.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_0.add_11rb$(item_0.text);
    }
    var paramNames = destination_0;
    var isVariadic = !pattern.parameters.items.isEmpty() && (Kotlin.isType(tmp$ = last(pattern.parameters.items).children.get_za3lpa$(0), TextTexTalkNode) ? tmp$ : throwCCE()).isVarArg;
    var values = value.parameters.items;
    if (isVariadic) {
      var b = paramNames.size - 1 | 0;
      var numRequired = Math_0.max(0, b);
      if (values.size < numRequired) {
        subs.doesMatch = false;
        subs.errors.add_11rb$('Expected at least ' + numRequired + ' arguments but found ' + values.size + " for '" + value.toCode_6z438g$() + "'");
        return;
      }
      for (var i = 0; i < numRequired; i++) {
        var exps = mutableListOf([values.get_za3lpa$(i)]);
        var $receiver_0 = subs.substitutions;
        var key = paramNames.get_za3lpa$(i);
        $receiver_0.put_xwzc9p$(key, exps);
      }
      var varArgs = ArrayList_init();
      tmp$_0 = values.size;
      for (var i_0 = numRequired; i_0 < tmp$_0; i_0++) {
        varArgs.add_11rb$(values.get_za3lpa$(i_0));
      }
      var $receiver_1 = subs.substitutions;
      var key_0 = last(paramNames);
      $receiver_1.put_xwzc9p$(key_0, varArgs);
    }
     else {
      var numRequired_0 = paramNames.size;
      if (values.size !== numRequired_0) {
        subs.doesMatch = false;
        subs.errors.add_11rb$('Expected exactly ' + numRequired_0 + ' arguments but found ' + values.size + " for '" + value.toCode_6z438g$() + "'");
        return;
      }
      for (var i_1 = 0; i_1 !== paramNames.size; ++i_1) {
        var exps_0 = mutableListOf([values.get_za3lpa$(i_1)]);
        var $receiver_2 = subs.substitutions;
        var key_1 = paramNames.get_za3lpa$(i_1);
        $receiver_2.put_xwzc9p$(key_1, exps_0);
      }
    }
  }
  function findSubstitutions_0(pattern, value, subs) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    if (!((tmp$ = pattern.name) != null ? tmp$.equals(value.name) : null)) {
      subs.doesMatch = false;
      subs.errors.add_11rb$('Name mismatch.  Expected ' + pattern.name + ' but found ' + value.name);
      return;
    }
    findSubstitutions(pattern.square, value.square, subs);
    findSubstitutions((tmp$_0 = pattern.subSup) != null ? tmp$_0.sub : null, (tmp$_1 = value.subSup) != null ? tmp$_1.sub : null, subs);
    findSubstitutions((tmp$_2 = pattern.subSup) != null ? tmp$_2.sup : null, (tmp$_3 = value.subSup) != null ? tmp$_3.sup : null, subs);
    var isLastVarArg = !pattern.groups.isEmpty() && last(pattern.groups).isVarArg;
    if (isLastVarArg) {
      if (value.groups.size >= pattern.groups.size) {
        tmp$_4 = pattern.groups;
        for (var i = 0; i !== tmp$_4.size; ++i) {
          findSubstitutions(pattern.groups.get_za3lpa$(i), value.groups.get_za3lpa$(i), subs);
        }
        var variadicName = (Kotlin.isType(tmp$_5 = last(pattern.groups).parameters.items.get_za3lpa$(0).children.get_za3lpa$(0), TextTexTalkNode) ? tmp$_5 : throwCCE()).text;
        tmp$_6 = pattern.groups.size;
        tmp$_7 = value.groups.size;
        for (var i_0 = tmp$_6; i_0 < tmp$_7; i_0++) {
          var items = value.groups.get_za3lpa$(i_0).parameters.items;
          if (items.size !== 1) {
            subs.doesMatch = false;
            subs.errors.add_11rb$('A variadic group can only contain a single item but found ' + items.size + " for '" + value.groups.get_za3lpa$(i_0));
            continue;
          }
          if (!subs.substitutions.containsKey_11rb$(variadicName)) {
            var tmp$_10 = subs.substitutions;
            var value_0 = ArrayList_init();
            tmp$_10.put_xwzc9p$(variadicName, value_0);
          }
          if (items.size !== 1) {
            subs.errors.add_11rb$('A variadic group can only contain a single item but found ' + items.size + " for '" + value.groups.get_za3lpa$(i_0).toCode_6z438g$() + "'");
            subs.doesMatch = false;
          }
           else {
            ensureNotNull(subs.substitutions.get_11rb$(variadicName)).add_11rb$(value.groups.get_za3lpa$(i_0).parameters.items.get_za3lpa$(0));
          }
        }
      }
       else {
        subs.doesMatch = false;
        subs.errors.add_11rb$('Expected at least ' + pattern.groups.size + ' groups but found ' + value.groups.size + " for '" + value.toCode_6z438g$() + "'");
      }
    }
     else {
      if (value.groups.size === pattern.groups.size) {
        tmp$_8 = pattern.groups;
        for (var i_1 = 0; i_1 !== tmp$_8.size; ++i_1) {
          findSubstitutions(pattern.groups.get_za3lpa$(i_1), value.groups.get_za3lpa$(i_1), subs);
        }
      }
       else {
        subs.doesMatch = false;
        subs.errors.add_11rb$('Expected exactly ' + pattern.groups.size + ' groups but found ' + value.groups.size + " for '" + value.toCode_6z438g$() + "'");
      }
    }
    if (pattern.namedGroups.size === value.namedGroups.size) {
      tmp$_9 = pattern.namedGroups;
      for (var i_2 = 0; i_2 !== tmp$_9.size; ++i_2) {
        var tmp$_11;
        var patternGrp = pattern.namedGroups.get_za3lpa$(i_2);
        var valGrp = value.namedGroups.get_za3lpa$(i_2);
        if (!((tmp$_11 = patternGrp.name) != null ? tmp$_11.equals(valGrp.name) : null)) {
          subs.doesMatch = false;
          subs.errors.add_11rb$('Mismatched named group: Expected ' + patternGrp.name + ' groups but found ' + valGrp.name + " for '" + value.toCode_6z438g$() + "'");
        }
        findSubstitutions(patternGrp.group, valGrp.group, subs);
      }
    }
     else {
      subs.doesMatch = false;
      subs.errors.add_11rb$('Expected exactly ' + pattern.namedGroups.size + ' named groups but found ' + value.namedGroups.size + " for '" + value.toCode_6z438g$() + "'");
    }
  }
  function validatePatternGroupImpl(group, canBeVarArg, description, errors) {
    var tmp$, tmp$_0;
    if (group == null)
      return;
    if (group.isVarArg && !canBeVarArg) {
      errors.add_11rb$(description + ' cannot be variadic');
    }
    if (group.isVarArg && (group.parameters.items.size !== 1 || group.parameters.items.get_za3lpa$(0).children.size !== 1 || !Kotlin.isType(group.parameters.items.get_za3lpa$(0).children.get_za3lpa$(0), TextTexTalkNode) || (Kotlin.isType(tmp$ = group.parameters.items.get_za3lpa$(0).children.get_za3lpa$(0), TextTexTalkNode) ? tmp$ : throwCCE()).isVarArg)) {
      errors.add_11rb$('A variadic group can only have a single identifier parameter that is not variadic');
      return;
    }
    tmp$_0 = group.parameters.items;
    for (var i = 0; i !== tmp$_0.size; ++i) {
      var expression = group.parameters.items.get_za3lpa$(i);
      if (expression.children.size !== 1) {
        errors.add_11rb$("Cannot have a parameter with more than one value: '" + expression.toCode_6z438g$() + "'");
        continue;
      }
      var item = expression.children.get_za3lpa$(0);
      if (!Kotlin.isType(item, TextTexTalkNode)) {
        errors.add_11rb$("Parameters can only be identifiers but found '" + item.toCode_6z438g$() + "'");
        continue;
      }
      if (item.isVarArg && i !== (group.parameters.items.size - 1 | 0)) {
        errors.add_11rb$("Only the last parameter in a group can be variadic: '" + item.toCode_6z438g$() + "'");
      }
    }
  }
  function validatePatternImpl(part, errors) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    validatePatternGroupImpl(part.square, false, 'A square group', errors);
    validatePatternGroupImpl((tmp$ = part.subSup) != null ? tmp$.sub : null, false, 'A ^ group', errors);
    validatePatternGroupImpl((tmp$_0 = part.subSup) != null ? tmp$_0.sup : null, false, 'A _ group', errors);
    tmp$_1 = part.groups;
    for (var i = 0; i !== tmp$_1.size; ++i) {
      var tmp$_3;
      var canBeVarArg = i === (part.groups.size - 1 | 0);
      if (i === (part.groups.size - 1 | 0)) {
        tmp$_3 = 'The last group';
      }
       else {
        tmp$_3 = 'A group';
      }
      var description = tmp$_3;
      validatePatternGroupImpl(part.groups.get_za3lpa$(i), canBeVarArg, description, errors);
    }
    tmp$_2 = part.namedGroups;
    for (var i_0 = 0; i_0 !== tmp$_2.size; ++i_0) {
      validatePatternGroupImpl(part.namedGroups.get_za3lpa$(i_0).group, false, 'A named group', errors);
    }
  }
  function validatePattern(command) {
    var tmp$;
    var errors = ArrayList_init();
    tmp$ = command.parts.iterator();
    while (tmp$.hasNext()) {
      var part = tmp$.next();
      validatePatternImpl(part, errors);
    }
    return errors;
  }
  function PatternExpansion(pattern, expansion) {
    this.pattern = pattern;
    this.expansion = expansion;
  }
  PatternExpansion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PatternExpansion',
    interfaces: []
  };
  PatternExpansion.prototype.component1 = function () {
    return this.pattern;
  };
  PatternExpansion.prototype.component2 = function () {
    return this.expansion;
  };
  PatternExpansion.prototype.copy_6svs8n$ = function (pattern, expansion) {
    return new PatternExpansion(pattern === void 0 ? this.pattern : pattern, expansion === void 0 ? this.expansion : expansion);
  };
  PatternExpansion.prototype.toString = function () {
    return 'PatternExpansion(pattern=' + Kotlin.toString(this.pattern) + (', expansion=' + Kotlin.toString(this.expansion)) + ')';
  };
  PatternExpansion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pattern) | 0;
    result = result * 31 + Kotlin.hashCode(this.expansion) | 0;
    return result;
  };
  PatternExpansion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pattern, other.pattern) && Kotlin.equals(this.expansion, other.expansion)))));
  };
  function expandAsWrittenImplImpl(cmd, sigToPatternExpansion) {
    return expandAsWrittenImplImpl_0(new OperatorTexTalkNode(null, cmd, null), sigToPatternExpansion);
  }
  function expandAsWrittenImplImpl_0(op, sigToPatternExpansion) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = sigToPatternExpansion.get_11rb$(signature(op));
    if (tmp$ == null) {
      return null;
    }
    var patternExpansion = tmp$;
    var subs = getSubstitutions(patternExpansion.pattern, op);
    if (!subs.doesMatch) {
      return null;
    }
    var expansion = patternExpansion.expansion;
    tmp$_0 = subs.substitutions.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_3 = tmp$_0.next();
      var name = tmp$_3.key;
      var exp = tmp$_3.value;
      var prefixRegex = Regex_init(name + '\\' + '{(.*)' + '\\' + '.' + '\\' + '.' + '\\' + '.' + '\\' + '}' + '\\' + '?');
      var infixRegex = Regex_init(name + '\\' + '{(.*)' + '\\' + '.' + '\\' + '.' + '\\' + '.(.*)' + '\\' + '.' + '\\' + '.' + '\\' + '.(.*)' + '\\' + '}' + '\\' + '?');
      var suffixRegex = Regex_init(name + '\\' + '{' + '\\' + '.' + '\\' + '.' + '\\' + '.(.*)' + '\\' + '}' + '\\' + '?');
      if (infixRegex.matches_6bul2c$(expansion)) {
        var destination = ArrayList_init_0(collectionSizeOrDefault(exp, 10));
        var tmp$_4;
        tmp$_4 = exp.iterator();
        while (tmp$_4.hasNext()) {
          var item = tmp$_4.next();
          destination.add_11rb$(expandAsWrittenImpl(item, sigToPatternExpansion));
        }
        var args = destination;
        var result = infixRegex.find_905azu$(expansion);
        if (result != null && result.groupValues.size >= 4) {
          var prefix = result.groupValues.get_za3lpa$(1);
          var separator = result.groupValues.get_za3lpa$(2);
          var suffix = result.groupValues.get_za3lpa$(3);
          var joinedArgs = joinToString(args, separator);
          var pattern = result.groupValues.get_za3lpa$(0);
          expansion = replace(expansion, pattern, joinedArgs);
          expansion = prefix + expansion + suffix;
        }
      }
       else if (prefixRegex.matches_6bul2c$(expansion)) {
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault(exp, 10));
        var tmp$_5;
        tmp$_5 = exp.iterator();
        while (tmp$_5.hasNext()) {
          var item_0 = tmp$_5.next();
          destination_0.add_11rb$(expandAsWrittenImpl(item_0, sigToPatternExpansion));
        }
        var args_0 = destination_0;
        var result_0 = prefixRegex.find_905azu$(expansion);
        if (result_0 != null && result_0.groupValues.size >= 2) {
          var separator_0 = result_0.groupValues.get_za3lpa$(1);
          var joinedArgsBuilder = StringBuilder_init();
          tmp$_1 = args_0.iterator();
          while (tmp$_1.hasNext()) {
            var a = tmp$_1.next();
            joinedArgsBuilder.append_gw00v9$(separator_0);
            joinedArgsBuilder.append_gw00v9$(a);
          }
          var joinedArgs_0 = joinedArgsBuilder.toString();
          var pattern_0 = result_0.groupValues.get_za3lpa$(0);
          expansion = replace(expansion, pattern_0, joinedArgs_0);
        }
      }
       else if (suffixRegex.matches_6bul2c$(expansion)) {
        var destination_1 = ArrayList_init_0(collectionSizeOrDefault(exp, 10));
        var tmp$_6;
        tmp$_6 = exp.iterator();
        while (tmp$_6.hasNext()) {
          var item_1 = tmp$_6.next();
          destination_1.add_11rb$(expandAsWrittenImpl(item_1, sigToPatternExpansion));
        }
        var args_1 = destination_1;
        var result_1 = suffixRegex.find_905azu$(expansion);
        if (result_1 != null && result_1.groupValues.size >= 2) {
          var separator_1 = result_1.groupValues.get_za3lpa$(1);
          var joinedArgsBuilder_0 = StringBuilder_init();
          tmp$_2 = args_1.iterator();
          while (tmp$_2.hasNext()) {
            var a_0 = tmp$_2.next();
            joinedArgsBuilder_0.append_gw00v9$(a_0);
            joinedArgsBuilder_0.append_gw00v9$(separator_1);
          }
          var joinedArgs_1 = joinedArgsBuilder_0.toString();
          var pattern_1 = result_1.groupValues.get_za3lpa$(0);
          expansion = replace(expansion, pattern_1, joinedArgs_1);
        }
      }
       else {
        if (!exp.isEmpty()) {
          var newText = expandAsWrittenImpl(first(exp), sigToPatternExpansion);
          expansion = replace(expansion, name + '?', newText);
        }
      }
    }
    return expansion;
  }
  function expandAsWrittenImpl$lambda(closure$sigToPatternExpansion) {
    return function (it) {
      if (Kotlin.isType(it, Command))
        return expandAsWrittenImplImpl(it, closure$sigToPatternExpansion);
      else if (Kotlin.isType(it, OperatorTexTalkNode))
        return expandAsWrittenImplImpl_0(it, closure$sigToPatternExpansion);
      else
        return null;
    };
  }
  function expandAsWrittenImpl(node, sigToPatternExpansion) {
    return node.toCode_6z438g$(expandAsWrittenImpl$lambda(sigToPatternExpansion));
  }
  function locateAllSignatures(node, locationTracker) {
    var signatures = LinkedHashSet_init();
    findAllSignaturesImpl(node, signatures, locationTracker);
    return signatures;
  }
  function findAllSignaturesImpl$lambda(closure$signatures, closure$locationTracker) {
    return function (it) {
      findAllSignaturesImpl(it, closure$signatures, closure$locationTracker);
      return Unit;
    };
  }
  function findAllSignaturesImpl(node, signatures, locationTracker) {
    var tmp$;
    if (Kotlin.isType(node, Statement)) {
      signatures.addAll_brywnq$(findAllStatementSignatures(node, locationTracker));
    }
     else if (Kotlin.isType(node, IdStatement)) {
      findAllSignaturesImpl(node.toStatement(), signatures, locationTracker);
    }
     else if (Kotlin.isType(node, TextSection)) {
      var sig = getSignature(node);
      if (sig != null) {
        signatures.add_11rb$(new Signature(sig, (tmp$ = locationTracker.getLocationOf_2v05ti$(node)) != null ? tmp$ : new Location(-1, -1)));
      }
    }
    node.forEach_s8izwl$(findAllSignaturesImpl$lambda(signatures, locationTracker));
  }
  function getSignature(section) {
    var match = Regex_init('\\\\term\\{(.*?)\\}').find_905azu$(section.text);
    if (match == null || match.groupValues.size < 2) {
      return null;
    }
    return match.groupValues.get_za3lpa$(1);
  }
  function findAllStatementSignatures(stmt, locationTracker) {
    var tmp$, tmp$_0, tmp$_1;
    var gluedStmt = Kotlin.isType(tmp$ = glueCommands(stmt, stmt).root, Statement) ? tmp$ : throwCCE();
    var rootValidation = gluedStmt.texTalkRoot;
    if (Kotlin.isType(rootValidation, ValidationSuccess)) {
      var expressionNode = rootValidation.value;
      var signatures = LinkedHashSet_init();
      findAllSignaturesImpl_0(expressionNode, signatures, (tmp$_0 = locationTracker.getLocationOf_2v05ti$(stmt)) != null ? tmp$_0 : new Location(-1, -1));
      tmp$_1 = signatures;
    }
     else if (Kotlin.isType(rootValidation, ValidationFailure))
      tmp$_1 = emptySet();
    else
      tmp$_1 = Kotlin.noWhenBranchMatched();
    return tmp$_1;
  }
  function findAllSignaturesImpl$lambda_0(closure$signatures, closure$location) {
    return function (it) {
      findAllSignaturesImpl_0(it, closure$signatures, closure$location);
      return Unit;
    };
  }
  function findAllSignaturesImpl_0(texTalkNode, signatures, location) {
    var tmp$;
    if (Kotlin.isType(texTalkNode, IsTexTalkNode)) {
      tmp$ = texTalkNode.rhs.items.iterator();
      while (tmp$.hasNext()) {
        var expNode = tmp$.next();
        var sig = getMergedCommandSignature(expNode);
        if (sig != null) {
          signatures.add_11rb$(new Signature(sig, location));
        }
      }
      return;
    }
     else if (Kotlin.isType(texTalkNode, Command)) {
      var sig_0 = signature_0(texTalkNode);
      signatures.add_11rb$(new Signature(sig_0, location));
    }
    texTalkNode.forEach_j2ps96$(findAllSignaturesImpl$lambda_0(signatures, location));
  }
  function getMergedCommandSignature(expressionNode) {
    var tmp$;
    var commandParts = ArrayList_init();
    tmp$ = expressionNode.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      if (Kotlin.isType(child, Command)) {
        commandParts.addAll_brywnq$(child.parts);
      }
    }
    if (!commandParts.isEmpty()) {
      return signature_0(new Command(commandParts));
    }
    return null;
  }
  function getSignature_0(group) {
    var tmp$;
    if (Kotlin.isType(group, DefinesGroup))
      tmp$ = signature_1(group.id);
    else if (Kotlin.isType(group, RepresentsGroup))
      tmp$ = signature_1(group.id);
    else if (Kotlin.isType(group, ProtoGroup))
      tmp$ = getSignature(group.textSection);
    else
      tmp$ = null;
    return tmp$;
  }
  function getKey(node) {
    var str = node.toString();
    var $receiver = Regex_init('row=-?\\d+').replace_x2uqeu$(str, 'ROW');
    return Regex_init('column=-?\\d+').replace_x2uqeu$($receiver, 'COLUMN');
  }
  function moveInlineCommandsToIsNode$realShouldProcessTex(closure$knownDefSigs) {
    return function (root, node) {
      var tmp$;
      if (Kotlin.isType(node, Command) && !closure$knownDefSigs.contains_11rb$(signature_0(node))) {
        return false;
      }
      var parents = getTexTalkAncestry(root, node);
      tmp$ = parents.iterator();
      while (tmp$.hasNext()) {
        var p = tmp$.next();
        if (Kotlin.isType(p, IsTexTalkNode)) {
          return false;
        }
      }
      return true;
    };
  }
  function moveInlineCommandsToIsNode$lambda$lambda(it) {
    return true;
  }
  function moveInlineCommandsToIsNode$lambda(closure$target, closure$seed, closure$realShouldProcessTex, closure$newTarget) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      if (Kotlin.isType(it, ClauseListNode) && (hasChild(it, closure$target) || hasChild(closure$target, it))) {
        var newClauses = ArrayList_init();
        tmp$ = it.clauses.iterator();
        while (tmp$.hasNext()) {
          var c = tmp$.next();
          if (Kotlin.isType(c, Statement)) {
            var transformed = moveStatementInlineCommandsToIsNode((tmp$_0 = closure$seed.v, closure$seed.v = tmp$_0 + 1 | 0, tmp$_0), c, moveInlineCommandsToIsNode$lambda$lambda, getCallableRef('realShouldProcessTex', function (root, node) {
              return closure$realShouldProcessTex(root, node);
            }));
            newClauses.add_11rb$(transformed);
          }
           else {
            newClauses.add_11rb$(c);
          }
        }
        var result = new ClauseListNode(newClauses);
        if (closure$newTarget.v == null && hasChild(it, closure$target)) {
          closure$newTarget.v = result;
        }
        tmp$_1 = result;
      }
       else {
        tmp$_1 = it;
      }
      var result_0 = tmp$_1;
      return result_0;
    };
  }
  function moveInlineCommandsToIsNode(defs, root, target) {
    var tmp$;
    var destination = ArrayList_init_0(collectionSizeOrDefault(defs, 10));
    var tmp$_0;
    tmp$_0 = defs.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.signature);
    }
    var knownDefSigs = toSet(filterNotNull_0(destination));
    var realShouldProcessTex = moveInlineCommandsToIsNode$realShouldProcessTex(knownDefSigs);
    var seed = {v: 0};
    var newTarget = {v: null};
    var newRoot = root.transform_ql661s$(moveInlineCommandsToIsNode$lambda(target, seed, realShouldProcessTex, newTarget));
    return new RootTarget(newRoot, (tmp$ = newTarget.v) != null ? tmp$ : target);
  }
  function moveStatementInlineCommandsToIsNode$shouldProcessTexNodes(closure$shouldProcessTex) {
    return function (root, node) {
      if (!closure$shouldProcessTex(root, node)) {
        return false;
      }
      var $receiver = getTexTalkAncestry(root, node);
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (Kotlin.isType(element, IsTexTalkNode)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return !any$result;
    };
  }
  function moveStatementInlineCommandsToIsNode(seed, stmt, shouldProcessChalk, shouldProcessTex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var validation = stmt.texTalkRoot;
    if (Kotlin.isType(validation, ValidationFailure)) {
      return stmt;
    }
    var root = (Kotlin.isType(tmp$ = validation, ValidationSuccess) ? tmp$ : throwCCE()).value;
    if (!shouldProcessChalk(stmt)) {
      return stmt;
    }
    var shouldProcessTexNodes = moveStatementInlineCommandsToIsNode$shouldProcessTexNodes(shouldProcessTex);
    var commandsFound = findCommands(root);
    var cmdToReplacement = LinkedHashMap_init();
    var count = seed;
    tmp$_0 = commandsFound.iterator();
    while (tmp$_0.hasNext()) {
      var cmd = tmp$_0.next();
      if (shouldProcessTex(root, cmd)) {
        var value = '$' + (tmp$_1 = count, count = tmp$_1 + 1 | 0, tmp$_1);
        cmdToReplacement.put_xwzc9p$(cmd, value);
      }
    }
    var cmdsToProcess = cmdToReplacement.keys;
    var newNode = Kotlin.isType(tmp$_2 = replaceCommands(stmt, cmdToReplacement, shouldProcessChalk, getCallableRef('shouldProcessTexNodes', function (root, node) {
      return shouldProcessTexNodes(root, node);
    })), Clause) ? tmp$_2 : throwCCE();
    if (commandsFound.isEmpty()) {
      return stmt;
    }
    if (cmdsToProcess.isEmpty()) {
      return stmt;
    }
    var destination = ArrayList_init_0(collectionSizeOrDefault(cmdsToProcess, 10));
    var tmp$_3;
    tmp$_3 = cmdsToProcess.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination.add_11rb$(new Identifier(ensureNotNull(cmdToReplacement.get_11rb$(item)), false));
    }
    var tmp$_4 = new ForSection(destination);
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(cmdsToProcess, 10));
    var tmp$_5;
    tmp$_5 = cmdsToProcess.iterator();
    while (tmp$_5.hasNext()) {
      var item_0 = tmp$_5.next();
      var tmp$_6 = destination_0.add_11rb$;
      var isNode = new IsTexTalkNode(new ParametersTexTalkNode(listOf(new ExpressionTexTalkNode(listOf(new TextTexTalkNode(TexTalkNodeType$Identifier_getInstance(), TexTalkTokenType$Identifier_getInstance(), ensureNotNull(cmdToReplacement.get_11rb$(item_0)), false))))), new ParametersTexTalkNode(listOf(new ExpressionTexTalkNode(listOf(item_0)))));
      tmp$_6.call(destination_0, new Statement(isNode.toCode_6z438g$(), validationSuccess(new ExpressionTexTalkNode(listOf(isNode)))));
    }
    return new ForGroup(tmp$_4, new WhereSection(new ClauseListNode(destination_0)), new ThenSection(new ClauseListNode(listOf(newNode))));
  }
  function replaceRepresents$chalkTransformer(closure$target, closure$repMap, closure$newTarget) {
    return function (node) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      if (!Kotlin.isType(node, ClauseListNode) || (!hasChild(node, closure$target) && !hasChild(closure$target, node))) {
        return node;
      }
      var newClauses = ArrayList_init();
      tmp$ = node.clauses.iterator();
      while (tmp$.hasNext()) {
        var clause = tmp$.next();
        if (!Kotlin.isType(clause, Statement)) {
          newClauses.add_11rb$(clause);
          continue;
        }
        if (Kotlin.isType(clause.texTalkRoot, ValidationSuccess) && clause.texTalkRoot.value.children.size === 1 && Kotlin.isType(clause.texTalkRoot.value.children.get_za3lpa$(0), Command)) {
          var command = Kotlin.isType(tmp$_0 = clause.texTalkRoot.value.children.get_za3lpa$(0), Command) ? tmp$_0 : throwCCE();
          var sig = signature_0(command);
          if (!closure$repMap.containsKey_11rb$(sig)) {
            return node;
          }
          var rep = ensureNotNull(closure$repMap.get_11rb$(sig));
          var cmdVars = getVars_1(command);
          var defIndirectVars = getRepresentsIdVars(rep);
          var map = LinkedHashMap_init();
          for (var i = 0; i !== cmdVars.size; ++i) {
            var key = defIndirectVars.get_za3lpa$(i);
            var value = cmdVars.get_za3lpa$(i);
            map.put_xwzc9p$(key, value);
          }
          var ifThen = buildIfThens_0(rep).get_za3lpa$(0);
          if (ifThen.ifSection.clauses.clauses.isEmpty()) {
            tmp$_1 = ifThen.thenSection.clauses.clauses.iterator();
            while (tmp$_1.hasNext()) {
              var c = tmp$_1.next();
              newClauses.add_11rb$(Kotlin.isType(tmp$_2 = renameVars_0(c, map), Clause) ? tmp$_2 : throwCCE());
            }
          }
           else {
            newClauses.add_11rb$(Kotlin.isType(tmp$_3 = renameVars_0(ifThen, map), Clause) ? tmp$_3 : throwCCE());
          }
        }
         else if (Kotlin.isType(clause.texTalkRoot, ValidationSuccess) && clause.texTalkRoot.value.children.size === 3 && Kotlin.isType(clause.texTalkRoot.value.children.get_za3lpa$(0), TextTexTalkNode) && Kotlin.isType(clause.texTalkRoot.value.children.get_za3lpa$(1), Command) && Kotlin.isType(clause.texTalkRoot.value.children.get_za3lpa$(2), TextTexTalkNode)) {
          var left = Kotlin.isType(tmp$_4 = clause.texTalkRoot.value.children.get_za3lpa$(0), TextTexTalkNode) ? tmp$_4 : throwCCE();
          var op = Kotlin.isType(tmp$_5 = clause.texTalkRoot.value.children.get_za3lpa$(1), Command) ? tmp$_5 : throwCCE();
          var right = Kotlin.isType(tmp$_6 = clause.texTalkRoot.value.children.get_za3lpa$(2), TextTexTalkNode) ? tmp$_6 : throwCCE();
          var sig_0 = signature_0(op);
          if (!closure$repMap.containsKey_11rb$(sig_0)) {
            return node;
          }
          var rep_0 = ensureNotNull(closure$repMap.get_11rb$(sig_0));
          var cmdVars_0 = listOf_0([left.text, right.text]);
          if (Kotlin.isType(rep_0.id.texTalkRoot, ValidationFailure)) {
            return node;
          }
          var validation = Kotlin.isType(tmp$_7 = rep_0.id.texTalkRoot, ValidationSuccess) ? tmp$_7 : throwCCE();
          if (validation.value.children.size !== 3 || !Kotlin.isType(validation.value.children.get_za3lpa$(0), TextTexTalkNode) || !Kotlin.isType(validation.value.children.get_za3lpa$(1), Command) || !Kotlin.isType(validation.value.children.get_za3lpa$(2), TextTexTalkNode)) {
            return node;
          }
          var repLeftOpRight = validation.value.children;
          var repLeft = (Kotlin.isType(tmp$_8 = repLeftOpRight.get_za3lpa$(0), TextTexTalkNode) ? tmp$_8 : throwCCE()).text;
          var repRight = (Kotlin.isType(tmp$_9 = repLeftOpRight.get_za3lpa$(2), TextTexTalkNode) ? tmp$_9 : throwCCE()).text;
          var defIndirectVars_0 = listOf_0([repLeft, repRight]);
          var map_0 = LinkedHashMap_init();
          for (var i_0 = 0; i_0 !== cmdVars_0.size; ++i_0) {
            var key_0 = defIndirectVars_0.get_za3lpa$(i_0);
            var value_0 = cmdVars_0.get_za3lpa$(i_0);
            map_0.put_xwzc9p$(key_0, value_0);
          }
          var ifThen_0 = buildIfThens_0(rep_0).get_za3lpa$(0);
          if (ifThen_0.ifSection.clauses.clauses.isEmpty()) {
            tmp$_10 = ifThen_0.thenSection.clauses.clauses.iterator();
            while (tmp$_10.hasNext()) {
              var c_0 = tmp$_10.next();
              newClauses.add_11rb$(Kotlin.isType(tmp$_11 = renameVars_0(c_0, map_0), Clause) ? tmp$_11 : throwCCE());
            }
          }
           else {
            newClauses.add_11rb$(Kotlin.isType(tmp$_12 = renameVars_0(ifThen_0, map_0), Clause) ? tmp$_12 : throwCCE());
          }
        }
         else {
          newClauses.add_11rb$(clause);
        }
      }
      var result = new ClauseListNode(newClauses);
      if (closure$newTarget.v == null && hasChild(node, closure$target)) {
        closure$newTarget.v = result;
      }
      return result;
    };
  }
  function replaceRepresents(root, represents, target) {
    var tmp$, tmp$_0;
    var repMap = LinkedHashMap_init();
    tmp$ = represents.iterator();
    while (tmp$.hasNext()) {
      var rep = tmp$.next();
      var sig = rep.signature;
      if (sig != null) {
        repMap.put_xwzc9p$(sig, rep);
      }
    }
    var newTarget = {v: null};
    var chalkTransformer = replaceRepresents$chalkTransformer(target, repMap, newTarget);
    var newRoot = root.transform_ql661s$(getCallableRef('chalkTransformer', function (node) {
      return chalkTransformer(node);
    }));
    return new RootTarget(newRoot, (tmp$_0 = newTarget.v) != null ? tmp$_0 : target);
  }
  function replaceIsNodes$chalkTransformer$addVarToMap(closure$forVarMap) {
    return function (v) {
      var tmp$;
      if (Kotlin.isType(v, AssignmentNode)) {
        var name = v.assignment.lhs.text;
        if (!closure$forVarMap.containsKey_11rb$(name)) {
          closure$forVarMap.put_xwzc9p$(name, v);
        }
      }
       else if (Kotlin.isType(v, AbstractionNode)) {
        tmp$ = v.abstraction.parts.iterator();
        while (tmp$.hasNext()) {
          var part = tmp$.next();
          var name_0 = part.name.text;
          if (!closure$forVarMap.containsKey_11rb$(name_0)) {
            closure$forVarMap.put_xwzc9p$(name_0, v);
          }
        }
      }
       else if (Kotlin.isType(v, Identifier)) {
        var name_1 = v.name;
        if (!closure$forVarMap.containsKey_11rb$(name_1)) {
          closure$forVarMap.put_xwzc9p$(name_1, v);
        }
      }
    };
  }
  function replaceIsNodes$chalkTransformer(closure$target, closure$defMap, closure$root, closure$newTarget) {
    return function (node) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
      if (!Kotlin.isType(node, ClauseListNode) || (!hasChild(node, closure$target) && !hasChild(closure$target, node))) {
        return node;
      }
      var newClauses = ArrayList_init();
      tmp$ = node.clauses.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        if (!Kotlin.isType(c, Statement)) {
          newClauses.add_11rb$(c);
          continue;
        }
        if (Kotlin.isType(c.texTalkRoot, ValidationFailure) || (Kotlin.isType(tmp$_0 = c.texTalkRoot, ValidationSuccess) ? tmp$_0 : throwCCE()).value.children.size !== 1 || !Kotlin.isType(c.texTalkRoot.value.children.get_za3lpa$(0), IsTexTalkNode)) {
          newClauses.add_11rb$(c);
          continue;
        }
        var isNode = Kotlin.isType(tmp$_1 = c.texTalkRoot.value.children.get_za3lpa$(0), IsTexTalkNode) ? tmp$_1 : throwCCE();
        if (isNode.rhs.items.size !== 1 || isNode.rhs.items.get_za3lpa$(0).children.size !== 1 || !Kotlin.isType(isNode.rhs.items.get_za3lpa$(0).children.get_za3lpa$(0), Command)) {
          newClauses.add_11rb$(c);
          continue;
        }
        var command = Kotlin.isType(tmp$_2 = isNode.rhs.items.get_za3lpa$(0).children.get_za3lpa$(0), Command) ? tmp$_2 : throwCCE();
        var sig = signature_0(command);
        if (!closure$defMap.containsKey_11rb$(sig)) {
          newClauses.add_11rb$(c);
          continue;
        }
        var def = ensureNotNull(closure$defMap.get_11rb$(sig));
        var cmdVars = getVars_1(command);
        var defDirectVars = getDefinesDirectVars(def);
        var defIndirectVars = getDefinesIdVars(def);
        if (cmdVars.size !== defIndirectVars.size) {
          newClauses.add_11rb$(c);
          continue;
        }
        var map = LinkedHashMap_init();
        for (var i = 0; i !== cmdVars.size; ++i) {
          var key = defIndirectVars.get_za3lpa$(i);
          var value = cmdVars.get_za3lpa$(i);
          map.put_xwzc9p$(key, value);
        }
        var stmtLhsVars = getVars_1(isNode.lhs);
        var lhsAncestry = getChalkTalkAncestry(closure$root, c);
        var forVarMap = LinkedHashMap_init();
        var addVarToMap = replaceIsNodes$chalkTransformer$addVarToMap(forVarMap);
        tmp$_3 = lhsAncestry.iterator();
        while (tmp$_3.hasNext()) {
          var parent = tmp$_3.next();
          if (Kotlin.isType(parent, ForGroup)) {
            tmp$_4 = parent.forSection.targets.iterator();
            while (tmp$_4.hasNext()) {
              var v = tmp$_4.next();
              addVarToMap(v);
            }
          }
           else if (Kotlin.isType(parent, ExistsGroup)) {
            tmp$_5 = parent.existsSection.identifiers.iterator();
            while (tmp$_5.hasNext()) {
              var v_0 = tmp$_5.next();
              addVarToMap(v_0);
            }
          }
        }
        var lhsVars = ArrayList_init();
        tmp$_6 = stmtLhsVars.iterator();
        while (tmp$_6.hasNext()) {
          var v_1 = tmp$_6.next();
          if (forVarMap.containsKey_11rb$(v_1)) {
            lhsVars.addAll_brywnq$(getVars_0(ensureNotNull(forVarMap.get_11rb$(v_1))));
          }
           else {
            lhsVars.add_11rb$(v_1);
          }
        }
        if (lhsVars.size > defDirectVars.size) {
          newClauses.add_11rb$(c);
          continue;
        }
        for (var i_0 = 0; i_0 !== lhsVars.size; ++i_0) {
          var key_0 = defDirectVars.get_za3lpa$(i_0);
          var value_0 = lhsVars.get_za3lpa$(i_0);
          map.put_xwzc9p$(key_0, value_0);
        }
        var ifThen = buildIfThens(def).get_za3lpa$(0);
        if (ifThen.ifSection.clauses.clauses.isEmpty()) {
          tmp$_7 = ifThen.thenSection.clauses.clauses.iterator();
          while (tmp$_7.hasNext()) {
            var thenClause = tmp$_7.next();
            newClauses.add_11rb$(Kotlin.isType(tmp$_8 = renameVars_0(thenClause, map), Clause) ? tmp$_8 : throwCCE());
          }
        }
         else {
          newClauses.add_11rb$(Kotlin.isType(tmp$_9 = renameVars_0(ifThen, map), Clause) ? tmp$_9 : throwCCE());
        }
      }
      var result = new ClauseListNode(newClauses);
      if (closure$newTarget.v == null && hasChild(node, closure$target)) {
        closure$newTarget.v = result;
      }
      return result;
    };
  }
  function replaceIsNodes(root, defs, target) {
    var tmp$, tmp$_0;
    var defMap = LinkedHashMap_init();
    tmp$ = defs.iterator();
    while (tmp$.hasNext()) {
      var def = tmp$.next();
      var sig = def.signature;
      if (sig != null) {
        defMap.put_xwzc9p$(sig, def);
      }
    }
    var newTarget = {v: null};
    var chalkTransformer = replaceIsNodes$chalkTransformer(target, defMap, root, newTarget);
    var newRoot = root.transform_ql661s$(getCallableRef('chalkTransformer', function (node) {
      return chalkTransformer(node);
    }));
    return new RootTarget(newRoot, (tmp$_0 = newTarget.v) != null ? tmp$_0 : target);
  }
  function toCanonicalForm(def) {
    var tmp$ = def.signature;
    var tmp$_0 = def.id;
    var tmp$_1 = def.definesSection;
    var $receiver = buildIfThens(def);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(new MeansSection(new ClauseListNode(listOf(item))));
    }
    return new DefinesGroup(tmp$, tmp$_0, tmp$_1, null, destination, def.aliasSection, def.metaDataSection);
  }
  function buildIfThens(def) {
    var $receiver = def.meansSections;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0, tmp$_1;
      destination.add_11rb$(new IfGroup(new IfSection((tmp$_1 = (tmp$_0 = def.assumingSection) != null ? tmp$_0.clauses : null) != null ? tmp$_1 : new ClauseListNode(emptyList())), new ThenSection(item.clauses)));
    }
    return destination;
  }
  function buildIfThens_0(rep) {
    var $receiver = rep.thatSections;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0, tmp$_1;
      destination.add_11rb$(new IfGroup(new IfSection((tmp$_1 = (tmp$_0 = rep.assumingSection) != null ? tmp$_0.clauses : null) != null ? tmp$_1 : new ClauseListNode(emptyList())), new ThenSection(item.clauses)));
    }
    return destination;
  }
  function getDefinesDirectVars(def) {
    var tmp$;
    var vars = ArrayList_init();
    tmp$ = def.definesSection.targets.iterator();
    while (tmp$.hasNext()) {
      var target = tmp$.next();
      vars.addAll_brywnq$(getVars_0(target));
    }
    return vars;
  }
  function getDefinesIdVars(def) {
    var vars = ArrayList_init();
    if (Kotlin.isType(def.id.texTalkRoot, ValidationSuccess)) {
      vars.addAll_brywnq$(getVars_1(def.id.texTalkRoot.value));
    }
    return vars;
  }
  function getRepresentsIdVars(rep) {
    var vars = ArrayList_init();
    if (Kotlin.isType(rep.id.texTalkRoot, ValidationSuccess)) {
      vars.addAll_brywnq$(getVars_1(rep.id.texTalkRoot.value));
    }
    return vars;
  }
  function expandAtNode(root, target, defines, represents) {
    var transformed = root;
    var realTarget = target;
    var sepIsPair = separateIsStatements(transformed, realTarget);
    transformed = sepIsPair.root;
    realTarget = sepIsPair.target;
    var sepInfixPair = separateInfixOperatorStatements(transformed, realTarget);
    transformed = sepInfixPair.root;
    realTarget = sepInfixPair.target;
    var gluePair = glueCommands(transformed, realTarget);
    transformed = gluePair.root;
    realTarget = gluePair.target;
    var mvInlineCmdsPair = moveInlineCommandsToIsNode(defines, transformed, realTarget);
    transformed = mvInlineCmdsPair.root;
    realTarget = mvInlineCmdsPair.target;
    var replaceRepsPair = replaceRepresents(transformed, represents, realTarget);
    transformed = replaceRepsPair.root;
    realTarget = replaceRepsPair.target;
    var replaceIsPair = replaceIsNodes(transformed, defines, realTarget);
    transformed = replaceIsPair.root;
    return transformed;
  }
  function fullExpandOnce(doc) {
    var tmp$;
    return Kotlin.isType(tmp$ = expandAtNode(doc, doc, doc.defines, doc.represents), Document) ? tmp$ : throwCCE();
  }
  function fullExpandComplete(doc, maxSteps) {
    if (maxSteps === void 0)
      maxSteps = 10;
    var snapshots = LinkedHashSet_init();
    var transformed = doc;
    var previousCode = transformed.toCode_pc06dk$(false, 0).getCode();
    snapshots.add_11rb$(previousCode);
    for (var i = 0; i < maxSteps; i++) {
      transformed = fullExpandOnce(transformed);
      var code = transformed.toCode_pc06dk$(false, 0).getCode();
      if (snapshots.contains_11rb$(code) || equals(previousCode, code)) {
        break;
      }
      previousCode = code;
      snapshots.add_11rb$(previousCode);
    }
    return transformed;
  }
  function separateInfixOperatorStatements$lambda(closure$newFollow, closure$follow) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      if (Kotlin.isType(it, ClauseListNode)) {
        var newClauses = ArrayList_init();
        tmp$ = it.clauses.iterator();
        while (tmp$.hasNext()) {
          var c = tmp$.next();
          if (Kotlin.isType(c, Statement)) {
            var validation = c.texTalkRoot;
            if (Kotlin.isType(validation, ValidationSuccess)) {
              var expRoot = validation.value;
              tmp$_0 = getExpandedInfixOperators(expRoot).iterator();
              while (tmp$_0.hasNext()) {
                var expanded = tmp$_0.next();
                newClauses.add_11rb$(new Statement(expanded.toCode_6z438g$(), validationSuccess(expanded)));
              }
            }
             else if (Kotlin.isType(validation, ValidationFailure))
              newClauses.add_11rb$(c);
            else
              Kotlin.noWhenBranchMatched();
          }
           else {
            newClauses.add_11rb$(c);
          }
        }
        var result = new ClauseListNode(newClauses);
        if (closure$newFollow.v == null && hasChild(it, closure$follow)) {
          closure$newFollow.v = result;
        }
        tmp$_1 = result;
      }
       else {
        tmp$_1 = it;
      }
      var result_0 = tmp$_1;
      return result_0;
    };
  }
  function separateInfixOperatorStatements(root, follow) {
    var tmp$;
    var newFollow = {v: null};
    var newRoot = root.transform_ql661s$(separateInfixOperatorStatements$lambda(newFollow, follow));
    return new RootTarget(newRoot, (tmp$ = newFollow.v) != null ? tmp$ : follow);
  }
  function getSingleInfixOperatorIndex(exp) {
    var tmp$;
    tmp$ = exp.children.size - 1 | 0;
    for (var i = 1; i < tmp$; i++) {
      var prev = exp.children.get_za3lpa$(i - 1 | 0);
      var cur = exp.children.get_za3lpa$(i);
      var next = exp.children.get_za3lpa$(i + 1 | 0);
      if (!isOperator(prev) && Kotlin.isType(cur, Command) && !isOperator(next)) {
        return i;
      }
    }
    return -1;
  }
  function isComma(node) {
    return Kotlin.isType(node, TextTexTalkNode) && equals(node.text, ',');
  }
  function isOperator(node) {
    var tmp$;
    if (!Kotlin.isType(node, TextTexTalkNode)) {
      return false;
    }
    if (isBlank(node.text)) {
      return false;
    }
    tmp$ = iterator(node.text);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if (!isOpChar(c)) {
        return false;
      }
    }
    return true;
  }
  function isOpChar(c) {
    return c === 33 || c === 64 || c === 37 || c === 38 || c === 42 || c === 45 || c === 43 || c === 61 || c === 124 || c === 47 || c === 60 || c === 62;
  }
  function getArguments(exp, start, end) {
    var tmp$;
    var result = ArrayList_init();
    var i = start;
    while (i < end) {
      var argChildren = ArrayList_init();
      while (i < end && !isComma(exp.children.get_za3lpa$(i))) {
        argChildren.add_11rb$(exp.children.get_za3lpa$((tmp$ = i, i = tmp$ + 1 | 0, tmp$)));
      }
      if (i < end && isComma(exp.children.get_za3lpa$(i))) {
        i = i + 1 | 0;
      }
      if (argChildren.size === 1) {
        result.add_11rb$(argChildren.get_za3lpa$(0));
      }
       else {
        result.add_11rb$(new ExpressionTexTalkNode(argChildren));
      }
    }
    return result;
  }
  function getExpandedInfixOperators(exp) {
    var tmp$, tmp$_0;
    var opIndex = getSingleInfixOperatorIndex(exp);
    if (opIndex < 0) {
      return listOf(exp);
    }
    var leftArgs = getArguments(exp, 0, opIndex);
    var rightArgs = getArguments(exp, opIndex + 1 | 0, exp.children.size);
    var result = ArrayList_init();
    var op = exp.children.get_za3lpa$(opIndex);
    tmp$ = leftArgs.iterator();
    while (tmp$.hasNext()) {
      var left = tmp$.next();
      tmp$_0 = rightArgs.iterator();
      while (tmp$_0.hasNext()) {
        var right = tmp$_0.next();
        result.add_11rb$(new ExpressionTexTalkNode(listOf_0([left, op, right])));
      }
    }
    return result;
  }
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function getVars(node) {
    var vars = ArrayList_init();
    getVarsImpl(node, vars);
    return vars;
  }
  function getVars_0(node) {
    var vars = ArrayList_init();
    getVarsImpl_0(node, vars);
    return vars;
  }
  function getVars_1(texTalkNode) {
    var vars = ArrayList_init();
    getVarsImpl_1(texTalkNode, vars, false);
    return vars;
  }
  function renameVars$lambda(closure$map) {
    return function (it) {
      var tmp$;
      if (Kotlin.isType(it, TextTexTalkNode)) {
        return it.copy_e4igys$(void 0, void 0, (tmp$ = closure$map.get_11rb$(it.text)) != null ? tmp$ : it.text);
      }
       else {
        return it;
      }
    };
  }
  function renameVars(texTalkNode, map) {
    return texTalkNode.transform_7szim8$(renameVars$lambda(map));
  }
  function renameVars$chalkTransformer$lambda(it) {
    return it.length;
  }
  function renameVars$chalkTransformer(closure$map) {
    return function (node) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (Kotlin.isType(node, Identifier)) {
        return new Identifier((tmp$ = closure$map.get_11rb$(node.name)) != null ? tmp$ : node.name, node.isVarArgs);
      }
      if (Kotlin.isType(node, Statement)) {
        var validation = node.texTalkRoot;
        if (Kotlin.isType(validation, ValidationSuccess)) {
          var exp = Kotlin.isType(tmp$_0 = renameVars(validation.value, closure$map), ExpressionTexTalkNode) ? tmp$_0 : throwCCE();
          return new Statement(exp.toCode_6z438g$(), validationSuccess(exp));
        }
         else if (Kotlin.isType(validation, ValidationFailure))
          tmp$_1 = node;
        else
          tmp$_1 = Kotlin.noWhenBranchMatched();
        return tmp$_1;
      }
       else if (Kotlin.isType(node, Text)) {
        var newText = node.text;
        var keysLongToShort = reversed(sortedWith(toList(closure$map.keys), new Comparator$ObjectLiteral_0(compareBy$lambda_0(renameVars$chalkTransformer$lambda))));
        tmp$_2 = keysLongToShort.iterator();
        while (tmp$_2.hasNext()) {
          var key = tmp$_2.next();
          newText = replace(newText, key + '&', ensureNotNull(closure$map.get_11rb$(key)));
        }
        return new Text(newText);
      }
      return node;
    };
  }
  function renameVars_0(root, map) {
    var chalkTransformer = renameVars$chalkTransformer(map);
    return root.transform_ql661s$(getCallableRef('chalkTransformer', function (node) {
      return chalkTransformer(node);
    }));
  }
  function getVarsImpl$lambda(closure$vars) {
    return function (it) {
      getVarsImpl(it, closure$vars);
      return Unit;
    };
  }
  function getVarsImpl(node, vars) {
    if (Kotlin.isType(node, Phase1Token)) {
      vars.add_11rb$(node.text);
    }
     else {
      node.forEach_t0jmzf$(getVarsImpl$lambda(vars));
    }
  }
  function getVarsImpl$lambda_0(closure$vars) {
    return function (it) {
      getVarsImpl_0(it, closure$vars);
      return Unit;
    };
  }
  function getVarsImpl_0(node, vars) {
    if (Kotlin.isType(node, Identifier)) {
      vars.add_11rb$(node.name);
    }
     else if (Kotlin.isType(node, TupleNode)) {
      getVarsImpl(node.tuple, vars);
    }
     else if (Kotlin.isType(node, AbstractionNode)) {
      getVarsImpl(node.abstraction, vars);
    }
     else if (Kotlin.isType(node, AssignmentNode)) {
      vars.add_11rb$(node.assignment.lhs.text);
      getVarsImpl(node.assignment.rhs, vars);
    }
     else {
      node.forEach_s8izwl$(getVarsImpl$lambda_0(vars));
    }
  }
  function getVarsImpl$lambda_1(closure$vars) {
    return function (it) {
      getVarsImpl_1(it, closure$vars, true);
      return Unit;
    };
  }
  function getVarsImpl$lambda_2(closure$vars, closure$inParams) {
    return function (it) {
      getVarsImpl_1(it, closure$vars, closure$inParams);
      return Unit;
    };
  }
  function getVarsImpl_1(texTalkNode, vars, inParams) {
    var tmp$, tmp$_0;
    if (inParams && Kotlin.isType(texTalkNode, TextTexTalkNode)) {
      tmp$_0 = texTalkNode.text;
      if (texTalkNode.isVarArg) {
        tmp$ = '...';
      }
       else {
        tmp$ = '';
      }
      vars.add_11rb$(tmp$_0 + tmp$);
    }
     else if (Kotlin.isType(texTalkNode, ParametersTexTalkNode)) {
      texTalkNode.forEach_j2ps96$(getVarsImpl$lambda_1(vars));
    }
     else {
      texTalkNode.forEach_j2ps96$(getVarsImpl$lambda_2(vars, inParams));
    }
  }
  var package$mathlingua = _.mathlingua || (_.mathlingua = {});
  var package$common = package$mathlingua.common || (package$mathlingua.common = {});
  package$common.Parse = Parse;
  package$common.Signature = Signature;
  Object.defineProperty(package$common, 'MathLingua', {
    get: MathLingua_getInstance
  });
  package$common.ParseError = ParseError;
  package$common.Location = Location;
  package$common.LocationTracker = LocationTracker;
  package$common.MutableLocationTracker = MutableLocationTracker;
  package$common.newLocationTracker = newLocationTracker;
  package$common.Validation = Validation;
  package$common.ValidationSuccess = ValidationSuccess;
  package$common.ValidationFailure = ValidationFailure;
  package$common.ValidationSuccessImpl = ValidationSuccessImpl;
  package$common.ValidationFailureImpl = ValidationFailureImpl;
  package$common.validationSuccess_mh5how$ = validationSuccess;
  package$common.validationSuccess_egeidq$ = validationSuccess_0;
  package$common.validationFailure_rg4ulb$ = validationFailure;
  package$common.justify_pd5a99$ = justify;
  var package$chalktalk = package$common.chalktalk || (package$common.chalktalk = {});
  var package$phase1 = package$chalktalk.phase1 || (package$chalktalk.phase1 = {});
  package$phase1.ChalkTalkLexer = ChalkTalkLexer;
  package$phase1.newChalkTalkLexer_61zpoe$ = newChalkTalkLexer;
  package$phase1.ChalkTalkParser = ChalkTalkParser;
  package$phase1.ChalkTalkParseResult = ChalkTalkParseResult;
  package$phase1.newChalkTalkParser = newChalkTalkParser;
  var package$ast = package$phase1.ast || (package$phase1.ast = {});
  package$ast.Phase1Node = Phase1Node;
  package$ast.Root = Root;
  package$ast.Argument = Argument;
  package$ast.Section = Section;
  Object.defineProperty(ChalkTalkTokenType, 'DotSpace', {
    get: ChalkTalkTokenType$DotSpace_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Name', {
    get: ChalkTalkTokenType$Name_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Colon', {
    get: ChalkTalkTokenType$Colon_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'String', {
    get: ChalkTalkTokenType$String_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Statement', {
    get: ChalkTalkTokenType$Statement_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Id', {
    get: ChalkTalkTokenType$Id_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Comma', {
    get: ChalkTalkTokenType$Comma_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Begin', {
    get: ChalkTalkTokenType$Begin_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'End', {
    get: ChalkTalkTokenType$End_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Linebreak', {
    get: ChalkTalkTokenType$Linebreak_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Invalid', {
    get: ChalkTalkTokenType$Invalid_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Equals', {
    get: ChalkTalkTokenType$Equals_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'ColonEquals', {
    get: ChalkTalkTokenType$ColonEquals_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'LParen', {
    get: ChalkTalkTokenType$LParen_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'RParen', {
    get: ChalkTalkTokenType$RParen_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'LCurly', {
    get: ChalkTalkTokenType$LCurly_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'RCurly', {
    get: ChalkTalkTokenType$RCurly_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'Underscore', {
    get: ChalkTalkTokenType$Underscore_getInstance
  });
  Object.defineProperty(ChalkTalkTokenType, 'DotDotDot', {
    get: ChalkTalkTokenType$DotDotDot_getInstance
  });
  package$ast.ChalkTalkTokenType = ChalkTalkTokenType;
  package$ast.Phase1Target = Phase1Target;
  package$ast.Mapping = Mapping;
  package$ast.Group = Group;
  package$ast.TupleItem = TupleItem;
  package$ast.Assignment = Assignment;
  package$ast.AssignmentRhs = AssignmentRhs;
  package$ast.Phase1Token = Phase1Token;
  package$ast.Tuple = Tuple;
  package$ast.Abstraction = Abstraction;
  package$ast.AbstractionPart = AbstractionPart;
  package$ast.buildIndent_iwgtk$ = buildIndent;
  package$ast.getRow_7qsl7r$ = getRow;
  package$ast.getColumn_7qsl7r$ = getColumn;
  var package$phase2 = package$chalktalk.phase2 || (package$chalktalk.phase2 = {});
  package$phase2.CodeWriter = CodeWriter;
  package$phase2.HtmlCodeWriter = HtmlCodeWriter;
  package$phase2.MathLinguaCodeWriter = MathLinguaCodeWriter;
  package$phase2.prettyPrintIdentifier_y4putb$ = prettyPrintIdentifier;
  package$phase2.getChalkTalkAncestry_wef8g3$ = getChalkTalkAncestry;
  package$phase2.findNode_innxn5$ = findNode;
  package$phase2.findNodesAtRow_s3ur67$ = findNodesAtRow;
  package$phase2.hasChild_wef8g3$ = hasChild;
  var package$ast_0 = package$phase2.ast || (package$phase2.ast = {});
  package$ast_0.Document = Document;
  package$ast_0.validateDocument_tvx4um$ = validateDocument;
  package$ast_0.Phase2Node = Phase2Node;
  var package$clause = package$ast_0.clause || (package$ast_0.clause = {});
  package$clause.AbstractionNode = AbstractionNode;
  package$clause.isAbstraction_baevx2$ = isAbstraction;
  package$clause.validateAbstractionNode_tvx4um$ = validateAbstractionNode;
  package$clause.AssignmentNode = AssignmentNode;
  package$clause.isAssignment_baevx2$ = isAssignment;
  package$clause.validateAssignmentNode_tvx4um$ = validateAssignmentNode;
  package$clause.Clause = Clause;
  package$clause.Target = Target;
  package$clause.validateClause_tvx4um$ = validateClause;
  package$clause.firstSectionMatchesName_ipjtm0$ = firstSectionMatchesName;
  package$clause.validateSingleSectionGroup_4kej2v$ = validateSingleSectionGroup;
  package$clause.validateDoubleSectionGroup_6ovtfv$ = validateDoubleSectionGroup;
  package$clause.validateWrappedNode_adnho9$ = validateWrappedNode;
  package$clause.toCode_xejcv2$ = toCode;
  package$clause.toCode_8hvxmk$ = toCode_0;
  package$clause.ClauseListNode = ClauseListNode;
  package$clause.ClauseListSection = ClauseListSection;
  package$clause.validateClauseList_xeuufg$ = validateClauseList;
  package$clause.ExistsGroup = ExistsGroup;
  package$clause.isExistsGroup_baevx2$ = isExistsGroup;
  package$clause.validateExistsGroup_tvx4um$ = validateExistsGroup;
  package$clause.ExpandsGroup = ExpandsGroup;
  package$clause.isExpandsGroup_baevx2$ = isExpandsGroup;
  package$clause.validateExpandsGroup_tvx4um$ = validateExpandsGroup;
  package$clause.ForGroup = ForGroup;
  package$clause.isForGroup_baevx2$ = isForGroup;
  package$clause.validateForGroup_tvx4um$ = validateForGroup;
  package$clause.IdStatement = IdStatement;
  package$clause.validateIdStatement_tvx4um$ = validateIdStatement;
  package$clause.Identifier = Identifier;
  package$clause.isIdentifier_baevx2$ = isIdentifier;
  package$clause.validateIdentifier_tvx4um$ = validateIdentifier;
  package$clause.IfGroup = IfGroup;
  package$clause.isIfGroup_baevx2$ = isIfGroup;
  package$clause.validateIfGroup_tvx4um$ = validateIfGroup;
  package$clause.IffGroup = IffGroup;
  package$clause.isIffGroup_baevx2$ = isIffGroup;
  package$clause.validateIffGroup_tvx4um$ = validateIffGroup;
  package$clause.MappingNode = MappingNode;
  package$clause.isMapping_baevx2$ = isMapping;
  package$clause.validateMappingNode_tvx4um$ = validateMappingNode;
  package$clause.NotGroup = NotGroup;
  package$clause.isNotGroup_baevx2$ = isNotGroup;
  package$clause.validateNotGroup_tvx4um$ = validateNotGroup;
  package$clause.OrGroup = OrGroup;
  package$clause.isOrGroup_baevx2$ = isOrGroup;
  package$clause.validateOrGroup_tvx4um$ = validateOrGroup;
  package$clause.Statement = Statement;
  package$clause.isStatement_baevx2$ = isStatement;
  package$clause.validateStatement_tvx4um$ = validateStatement;
  package$clause.TargetListSection = TargetListSection;
  package$clause.validateTargetList_556a4y$ = validateTargetList;
  package$clause.Text = Text;
  package$clause.isText_baevx2$ = isText;
  package$clause.validateText_tvx4um$ = validateText;
  package$clause.TupleNode = TupleNode;
  package$clause.isTuple_baevx2$ = isTuple;
  package$clause.validateTupleNode_tvx4um$ = validateTupleNode;
  var package$metadata = package$ast_0.metadata || (package$ast_0.metadata = {});
  package$metadata.indentedStringSection_sj0f6p$ = indentedStringSection;
  package$metadata.validateStringSection_g56zmb$ = validateStringSection;
  package$metadata.isSingleSectionGroup_7qsl7r$ = isSingleSectionGroup;
  var package$item = package$metadata.item || (package$metadata.item = {});
  package$item.MetaDataItem = MetaDataItem;
  package$item.ReferenceGroup = ReferenceGroup;
  package$item.isReferenceGroup_baevx2$ = isReferenceGroup;
  package$item.validateReferenceGroup_m7mi13$ = validateReferenceGroup;
  package$item.SourceItemGroup = SourceItemGroup;
  package$item.isSourceItemGroup_baevx2$ = isSourceItemGroup;
  package$item.validateSourceItemGroup_m7mi13$ = validateSourceItemGroup;
  package$item.StringSectionGroup = StringSectionGroup;
  var package$section = package$metadata.section || (package$metadata.section = {});
  package$section.ContentItemSection = ContentItemSection;
  package$section.MetaDataSection = MetaDataSection;
  package$section.validateMetaDataSection_dopyg1$ = validateMetaDataSection;
  package$section.OffsetItemSection = OffsetItemSection;
  package$section.PageItemSection = PageItemSection;
  package$section.ReferenceSection = ReferenceSection;
  package$section.SourceItemSection = SourceItemSection;
  package$section.StringSection = StringSection;
  var package$section_0 = package$ast_0.section || (package$ast_0.section = {});
  package$section_0.AliasSection = AliasSection;
  package$section_0.validateAliasSection_dopyg1$ = validateAliasSection;
  package$section_0.AsSection = AsSection;
  package$section_0.validateAsSection_tvx4um$ = validateAsSection;
  package$section_0.AssumingSection = AssumingSection;
  package$section_0.validateAssumingSection_tvx4um$ = validateAssumingSection;
  package$section_0.AxiomSection = AxiomSection;
  package$section_0.validateAxiomSection_tvx4um$ = validateAxiomSection;
  package$section_0.ConjectureSection = ConjectureSection;
  package$section_0.validateConjectureSection_tvx4um$ = validateConjectureSection;
  package$section_0.DefinesSection = DefinesSection;
  package$section_0.validateDefinesSection_tvx4um$ = validateDefinesSection;
  package$section_0.ExistsSection = ExistsSection;
  package$section_0.validateExistsSection_tvx4um$ = validateExistsSection;
  package$section_0.ExpandsSection = ExpandsSection;
  package$section_0.validateExpandsSection_tvx4um$ = validateExpandsSection;
  package$section_0.ForSection = ForSection;
  package$section_0.validateForSection_tvx4um$ = validateForSection;
  package$section_0.IfSection = IfSection;
  package$section_0.validateIfSection_tvx4um$ = validateIfSection;
  package$section_0.IffSection = IffSection;
  package$section_0.validateIffSection_tvx4um$ = validateIffSection;
  package$section_0.MeansSection = MeansSection;
  package$section_0.validateMeansSection_tvx4um$ = validateMeansSection;
  package$section_0.NotSection = NotSection;
  package$section_0.validateNotSection_tvx4um$ = validateNotSection;
  package$section_0.OrSection = OrSection;
  package$section_0.validateOrSection_tvx4um$ = validateOrSection;
  package$section_0.RefinesSection = RefinesSection;
  package$section_0.validateRefinesSection_tvx4um$ = validateRefinesSection;
  package$section_0.RepresentsSection = RepresentsSection;
  package$section_0.validateRepresentsSection_tvx4um$ = validateRepresentsSection;
  package$section_0.ResourceSection = ResourceSection;
  package$section_0.validateResourceSection_dopyg1$ = validateResourceSection;
  package$section_0.identifySections_b3nzct$ = identifySections;
  package$section_0.appendTargetArgs_oswce3$ = appendTargetArgs;
  Object.defineProperty(package$section_0, 'SOURCE_ITEM_CONSTRAINTS', {
    get: function () {
      return SOURCE_ITEM_CONSTRAINTS;
    }
  });
  package$section_0.SourceSection = SourceSection;
  package$section_0.validateSourceSection_dopyg1$ = validateSourceSection;
  package$section_0.SuchThatSection = SuchThatSection;
  package$section_0.validateSuchThatSection_tvx4um$ = validateSuchThatSection;
  package$section_0.TextSection = TextSection;
  package$section_0.validateTextSection_a171gg$ = validateTextSection;
  package$section_0.ThatSection = ThatSection;
  package$section_0.validateThatSection_tvx4um$ = validateThatSection;
  package$section_0.ThenSection = ThenSection;
  package$section_0.validateThenSection_tvx4um$ = validateThenSection;
  package$section_0.TheoremSection = TheoremSection;
  package$section_0.validateTheoremSection_tvx4um$ = validateTheoremSection;
  package$section_0.WhereSection = WhereSection;
  package$section_0.validateWhereSection_tvx4um$ = validateWhereSection;
  var package$toplevel = package$ast_0.toplevel || (package$ast_0.toplevel = {});
  package$toplevel.AxiomGroup = AxiomGroup;
  package$toplevel.isAxiomGroup_baevx2$ = isAxiomGroup;
  package$toplevel.validateAxiomGroup_m7mi13$ = validateAxiomGroup;
  package$toplevel.ConjectureGroup = ConjectureGroup;
  package$toplevel.isConjectureGroup_baevx2$ = isConjectureGroup;
  package$toplevel.validateConjectureGroup_m7mi13$ = validateConjectureGroup;
  package$toplevel.DefinesGroup = DefinesGroup;
  package$toplevel.isDefinesGroup_baevx2$ = isDefinesGroup;
  package$toplevel.validateDefinesGroup_m7mi13$ = validateDefinesGroup;
  package$toplevel.ProtoGroup = ProtoGroup;
  package$toplevel.validateProtoGroup_vcu0qz$ = validateProtoGroup;
  package$toplevel.RepresentsGroup = RepresentsGroup;
  package$toplevel.isRepresentsGroup_baevx2$ = isRepresentsGroup;
  package$toplevel.validateRepresentsGroup_m7mi13$ = validateRepresentsGroup;
  package$toplevel.ResourceGroup = ResourceGroup;
  package$toplevel.isResourceGroup_baevx2$ = isResourceGroup;
  package$toplevel.validateResourceGroup_m7mi13$ = validateResourceGroup;
  package$toplevel.TheoremGroup = TheoremGroup;
  package$toplevel.isTheoremGroup_baevx2$ = isTheoremGroup;
  package$toplevel.validateTheoremGroup_m7mi13$ = validateTheoremGroup;
  package$toplevel.TopLevelGroup = TopLevelGroup;
  package$toplevel.topLevelToCode_gniy11$ = topLevelToCode;
  package$toplevel.validateResultLikeGroup_2tafwm$ = validateResultLikeGroup;
  package$toplevel.validateDefinesLikeGroup_7fxr05$ = validateDefinesLikeGroup;
  var package$collections = package$common.collections || (package$common.collections = {});
  package$collections.Queue = Queue;
  package$collections.newQueue_287e2$ = newQueue;
  package$collections.Stack = Stack;
  package$collections.newStack_287e2$ = newStack;
  Object.defineProperty(TexTalkNodeType, 'Token', {
    get: TexTalkNodeType$Token_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'Identifier', {
    get: TexTalkNodeType$Identifier_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'Operator', {
    get: TexTalkNodeType$Operator_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'SyntheticGroup', {
    get: TexTalkNodeType$SyntheticGroup_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'ParenGroup', {
    get: TexTalkNodeType$ParenGroup_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'SquareGroup', {
    get: TexTalkNodeType$SquareGroup_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'CurlyGroup', {
    get: TexTalkNodeType$CurlyGroup_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'NamedGroup', {
    get: TexTalkNodeType$NamedGroup_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'Command', {
    get: TexTalkNodeType$Command_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'CommandPart', {
    get: TexTalkNodeType$CommandPart_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'Expression', {
    get: TexTalkNodeType$Expression_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'SubSup', {
    get: TexTalkNodeType$SubSup_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'Parameters', {
    get: TexTalkNodeType$Parameters_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'Comma', {
    get: TexTalkNodeType$Comma_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'Is', {
    get: TexTalkNodeType$Is_getInstance
  });
  Object.defineProperty(TexTalkNodeType, 'ColonEquals', {
    get: TexTalkNodeType$ColonEquals_getInstance
  });
  var package$textalk = package$common.textalk || (package$common.textalk = {});
  package$textalk.TexTalkNodeType = TexTalkNodeType;
  package$textalk.TexTalkNode = TexTalkNode;
  package$textalk.IsTexTalkNode = IsTexTalkNode;
  package$textalk.ColonEqualsTexTalkNode = ColonEqualsTexTalkNode;
  package$textalk.CommandPart = CommandPart;
  package$textalk.Command = Command;
  package$textalk.ExpressionTexTalkNode = ExpressionTexTalkNode;
  package$textalk.ParametersTexTalkNode = ParametersTexTalkNode;
  package$textalk.GroupTexTalkNode = GroupTexTalkNode;
  package$textalk.NamedGroupTexTalkNode = NamedGroupTexTalkNode;
  package$textalk.SubSupTexTalkNode = SubSupTexTalkNode;
  package$textalk.TextTexTalkNode = TextTexTalkNode;
  package$textalk.OperatorTexTalkNode = OperatorTexTalkNode;
  package$textalk.TexTalkToken = TexTalkToken;
  Object.defineProperty(TexTalkTokenType, 'Backslash', {
    get: TexTalkTokenType$Backslash_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'LParen', {
    get: TexTalkTokenType$LParen_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'RParen', {
    get: TexTalkTokenType$RParen_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'LSquare', {
    get: TexTalkTokenType$LSquare_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'RSquare', {
    get: TexTalkTokenType$RSquare_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'LCurly', {
    get: TexTalkTokenType$LCurly_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'RCurly', {
    get: TexTalkTokenType$RCurly_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Operator', {
    get: TexTalkTokenType$Operator_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Identifier', {
    get: TexTalkTokenType$Identifier_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Comma', {
    get: TexTalkTokenType$Comma_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Period', {
    get: TexTalkTokenType$Period_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Colon', {
    get: TexTalkTokenType$Colon_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Underscore', {
    get: TexTalkTokenType$Underscore_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Caret', {
    get: TexTalkTokenType$Caret_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'ColonEquals', {
    get: TexTalkTokenType$ColonEquals_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Is', {
    get: TexTalkTokenType$Is_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'DotDotDot', {
    get: TexTalkTokenType$DotDotDot_getInstance
  });
  Object.defineProperty(TexTalkTokenType, 'Invalid', {
    get: TexTalkTokenType$Invalid_getInstance
  });
  package$textalk.TexTalkTokenType = TexTalkTokenType;
  package$textalk.getTexTalkAncestry_3b8392$ = getTexTalkAncestry;
  package$textalk.parseOperators_4mpz2e$ = parseOperators;
  package$textalk.TexTalkLexer = TexTalkLexer;
  package$textalk.newTexTalkLexer_61zpoe$ = newTexTalkLexer;
  package$textalk.TexTalkParser = TexTalkParser;
  package$textalk.TexTalkParseResult = TexTalkParseResult;
  package$textalk.newTexTalkParser = newTexTalkParser;
  var package$transform = package$common.transform || (package$common.transform = {});
  package$transform.RootTarget = RootTarget;
  package$transform.locateAllCommands_g67bbb$ = locateAllCommands;
  package$transform.findCommands_szso8u$ = findCommands;
  package$transform.replaceSignatures_7mqjz2$ = replaceSignatures;
  package$transform.replaceCommands_b5lf6d$ = replaceCommands;
  package$transform.replaceCommands_ohd03o$ = replaceCommands_0;
  package$transform.separateIsStatements_wef8g3$ = separateIsStatements;
  package$transform.glueCommands_wef8g3$ = glueCommands;
  package$transform.glueCommands_f1ync3$ = glueCommands_0;
  package$transform.signature_u9zylx$ = signature;
  package$transform.signature_tlgh8b$ = signature_0;
  package$transform.signature_fgahjx$ = signature_1;
  package$transform.Substitutions = Substitutions;
  package$transform.getSubstitutions_tt0fr9$ = getSubstitutions;
  package$transform.expandAsWritten_c7eyxq$ = expandAsWritten;
  package$transform.locateAllSignatures_o1cvlb$ = locateAllSignatures;
  package$transform.findAllStatementSignatures_jeuz20$ = findAllStatementSignatures;
  package$transform.getMergedCommandSignature_4mpz2e$ = getMergedCommandSignature;
  package$transform.getSignature_vwc43z$ = getSignature_0;
  package$transform.getKey_g67bbb$ = getKey;
  package$transform.moveInlineCommandsToIsNode_yx9fjh$ = moveInlineCommandsToIsNode;
  package$transform.moveStatementInlineCommandsToIsNode_rp9pn2$ = moveStatementInlineCommandsToIsNode;
  package$transform.replaceRepresents_3f0z1y$ = replaceRepresents;
  package$transform.replaceIsNodes_km033z$ = replaceIsNodes;
  package$transform.toCanonicalForm_buh286$ = toCanonicalForm;
  package$transform.buildIfThens_buh286$ = buildIfThens;
  package$transform.buildIfThens_le9t91$ = buildIfThens_0;
  package$transform.getDefinesDirectVars_buh286$ = getDefinesDirectVars;
  package$transform.getDefinesIdVars_buh286$ = getDefinesIdVars;
  package$transform.getRepresentsIdVars_le9t91$ = getRepresentsIdVars;
  package$transform.expandAtNode_2upo66$ = expandAtNode;
  package$transform.fullExpandOnce_4xdyl7$ = fullExpandOnce;
  package$transform.fullExpandComplete_uzww4t$ = fullExpandComplete;
  package$transform.separateInfixOperatorStatements_wef8g3$ = separateInfixOperatorStatements;
  package$transform.getVars_7qsl7r$ = getVars;
  package$transform.getVars_g67bbb$ = getVars_0;
  package$transform.getVars_szso8u$ = getVars_1;
  package$transform.renameVars_wt2a3p$ = renameVars;
  package$transform.renameVars_rf4ed2$ = renameVars_0;
  HtmlCodeWriter.prototype.writeNewline_za3lpa$ = CodeWriter.prototype.writeNewline_za3lpa$;
  MathLinguaCodeWriter.prototype.writeNewline_za3lpa$ = CodeWriter.prototype.writeNewline_za3lpa$;
  Document.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  Clause.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  Target.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  AbstractionNode.prototype.toCode_pc06dk$ = Target.prototype.toCode_pc06dk$;
  AssignmentNode.prototype.toCode_pc06dk$ = Target.prototype.toCode_pc06dk$;
  ClauseListNode.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ExistsGroup.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  ExpandsGroup.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  ForGroup.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  IdStatement.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  Identifier.prototype.toCode_pc06dk$ = Target.prototype.toCode_pc06dk$;
  IfGroup.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  IffGroup.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  MappingNode.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  NotGroup.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  OrGroup.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  Statement.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  Text.prototype.toCode_pc06dk$ = Clause.prototype.toCode_pc06dk$;
  TupleNode.prototype.toCode_pc06dk$ = Target.prototype.toCode_pc06dk$;
  MetaDataItem.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ContentItemSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  MetaDataSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  OffsetItemSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  PageItemSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ReferenceSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  SourceItemSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  StringSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  AliasSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  AsSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  AssumingSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  AxiomSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ConjectureSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  DefinesSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ExistsSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ExpandsSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  PseudoExpandsSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ForSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  IfSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  IffSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  MeansSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  NotSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  OrSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  RefinesSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  RepresentsSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  SourceSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  SuchThatSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  TextSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ThatSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  ThenSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  TheoremSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  WhereSection.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  TopLevelGroup.prototype.toCode_pc06dk$ = Phase2Node.prototype.toCode_pc06dk$;
  IsTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  ColonEqualsTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  CommandPart.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  Command.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  ExpressionTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  ParametersTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  GroupTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  NamedGroupTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  SubSupTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  TextTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  OperatorTexTalkNode.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  TexTalkToken.prototype.toCode_6z438g$ = TexTalkNode.prototype.toCode_6z438g$;
  INVALID = new Phase1Token('INVALID', ChalkTalkTokenType$Invalid_getInstance(), -1, -1);
  CLAUSE_VALIDATORS = listOf_0([new ValidationPair(getCallableRef('isAbstraction', function (node) {
    return isAbstraction(node);
  }), getCallableRef('validateAbstractionNode', function (node, tracker) {
    return validateAbstractionNode(node, tracker);
  })), new ValidationPair(getCallableRef('isTuple', function (node) {
    return isTuple(node);
  }), getCallableRef('validateTupleNode', function (node, tracker) {
    return validateTupleNode(node, tracker);
  })), new ValidationPair(getCallableRef('isAssignment', function (node) {
    return isAssignment(node);
  }), getCallableRef('validateAssignmentNode', function (node, tracker) {
    return validateAssignmentNode(node, tracker);
  })), new ValidationPair(getCallableRef('isIdentifier', function (node) {
    return isIdentifier(node);
  }), getCallableRef('validateIdentifier', function (rawNode, tracker) {
    return validateIdentifier(rawNode, tracker);
  })), new ValidationPair(getCallableRef('isStatement', function (node) {
    return isStatement(node);
  }), getCallableRef('validateStatement', function (rawNode, tracker) {
    return validateStatement(rawNode, tracker);
  })), new ValidationPair(getCallableRef('isText', function (node) {
    return isText(node);
  }), getCallableRef('validateText', function (rawNode, tracker) {
    return validateText(rawNode, tracker);
  })), new ValidationPair(getCallableRef('isForGroup', function (node) {
    return isForGroup(node);
  }), getCallableRef('validateForGroup', function (rawNode, tracker) {
    return validateForGroup(rawNode, tracker);
  })), new ValidationPair(getCallableRef('isExistsGroup', function (node) {
    return isExistsGroup(node);
  }), getCallableRef('validateExistsGroup', function (node, tracker) {
    return validateExistsGroup(node, tracker);
  })), new ValidationPair(getCallableRef('isNotGroup', function (node) {
    return isNotGroup(node);
  }), getCallableRef('validateNotGroup', function (node, tracker) {
    return validateNotGroup(node, tracker);
  })), new ValidationPair(getCallableRef('isOrGroup', function (node) {
    return isOrGroup(node);
  }), getCallableRef('validateOrGroup', function (node, tracker) {
    return validateOrGroup(node, tracker);
  })), new ValidationPair(getCallableRef('isIfGroup', function (node) {
    return isIfGroup(node);
  }), getCallableRef('validateIfGroup', function (node, tracker) {
    return validateIfGroup(node, tracker);
  })), new ValidationPair(getCallableRef('isIffGroup', function (node) {
    return isIffGroup(node);
  }), getCallableRef('validateIffGroup', function (node, tracker) {
    return validateIffGroup(node, tracker);
  })), new ValidationPair(getCallableRef('isExpandsGroup', function (node) {
    return isExpandsGroup(node);
  }), getCallableRef('validateExpandsGroup', function (rawNode, tracker) {
    return validateExpandsGroup(rawNode, tracker);
  }))]);
  META_DATA_ITEM_CONSTRAINTS = mapOf([to('name', -1), to('classification', -1), to('tag', -1), to('author', -1), to('contributor', -1), to('written', -1), to('note', -1), to('id', 1), to('concept', 1), to('summary', 1)]);
  SOURCE_ITEM_CONSTRAINTS = mapOf([to('type', 1), to('name', 1), to('author', -1), to('date', 1), to('homepage', 1), to('url', 1), to('offset', 1), to('related', -1)]);
  INVALID_0 = new TexTalkToken('INVALID', TexTalkTokenType$Invalid_getInstance(), -1, -1);
  Kotlin.defineModule('mathlingua', _);
  return _;
}(module.exports, require('kotlin')));
