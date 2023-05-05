import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import style from '../Styles/CounterStyle';

function Scroll_demo(props) {
  return (
    <ScrollView>
      <View style={style.ScrollBody}>
        <Text style={style.ScrollViewText}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. It is also used
          to temporarily replace text in a process called greeking, which allows
          designers to consider the form of a webpage or publication, without
          the meaning of the text influencing the design. Lorem ipsum is
          typically a corrupted version of De finibus bonorum et malorum, a
          1st-century BC text by the Roman statesman and philosopher Cicero,
          with words altered, added, and removed to make it nonsensical and
          improper Latin. Versions of the Lorem ipsum text have been used in
          typesetting at least since the 1960s, when it was popularized by
          advertisements for Letraset transfer sheets.[1] Lorem ipsum was
          introduced to the digital world in the mid-1980s, when Aldus employed
          it in graphic and word-processing templates for its desktop publishing
          program PageMaker. Other popular word processors, including Pages and
          Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX
          packages,[3][4][5] web content managers such as Joomla! and WordPress,
          and CSS libraries such as Semantic UI.[6] Example text A common form
          of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Source
          text The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33
          of Cicero's 'De finibus bonorum et malorum'.[7][8] The physical source
          may have been the 1914 Loeb Classical Library edition of De finibus,
          where the Latin text, presented on the left-hand (even) pages, breaks
          off on page 34 with "Neque porro quisquam est qui do-" and continues
          on page 36 with "lorem ipsum ...", suggesting that the galley type of
          that page was mixed up to make the dummy text seen today.[1] The
          discovery of the text's origin is attributed to Richard McClintock, a
          Latin scholar at Hampden–Sydney College. McClintock connected Lorem
          ipsum to Cicero's writing sometime before 1982 while searching for
          instances of the Latin word consectetur, which was rarely used in
          classical literature.[2] McClintock first published his discovery in a
          1994 letter to the editor of Before & After magazine, contesting the
          editor's earlier claim that Lorem ipsum held no meaning.[2] The
          relevant section of Cicero as printed in the source is reproduced
          below with fragments used in Lorem ipsum highlighted. Letters in
          brackets were added to Lorem ipsum and were not present in the source
          text: [32] Sed ut perspiciatis, unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam eaque
          ipsa, quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
          sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
          quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur
          adipisci[ng] velit, sed quia non numquam [do] eius modi tempora
          inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.
          Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea
          voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui
          dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et
          accusamus et iusto odio dignissimos ducimus, qui blanditiis
          praesentium voluptatum deleniti atque corrupti, quos dolores et quas
          molestias excepturi sint, obcaecati cupiditate non provident,
          similique sunt in culpa, qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est elig
        </Text>
      </View>
    </ScrollView>
  );
}
export default Scroll_demo;
