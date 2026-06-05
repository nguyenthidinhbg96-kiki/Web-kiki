const n5Data = {

1: `
<style>
.g-header{
  display:flex;
  align-items:baseline;
  gap:6px;
  margin-bottom:6px;
}

.g-label{
  font-weight:600;
}

.g-sub-inline{
  font-size:12px;
  color:#999;
}

/* ===== Ý NGHĨA VIỀN MẢNH ===== */
.meaning{
  border:0.5px solid #eee;
  border-radius:10px;
  padding:10px;
  margin-top:8px;
  background:#fff;
}

/* ===== EXAMPLE ===== */
.example-wrap{
  position:relative;
}

.furi-toggle{
  position:absolute;
  top:0;
  right:0;
  font-size:10px;
  padding:3px 6px;
  border-radius:6px;
  background:#fff;
  border:1px solid #ddd;
  cursor:pointer;
  color:#777;
}

/* ẨN FURIGANA */
.hide-furi rt{
  display:none;
}

/* layout */
.example-row{
  display:flex;
  align-items:flex-start;
  gap:10px;
  margin-bottom:12px;
}

.ex-num{
  width:20px;
  flex-shrink:0;
  font-weight:bold;
  color:#555;
}

.ex-content{
  flex:1;
}

.jp-ex{
  font-weight:500;
  margin-bottom:2px;
}

.vi-sub{
  font-size:14px;
}

.en-sub{
  font-size:12px;
  color:#999;
}
</style>

<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

  <div class="vi-sub">Dùng để nói về sự vật, trạng thái hiện tại một cách lịch sự.</div>
  <div class="en-sub">Used to describe things or states politely in the present.</div>
</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
<div class="formula-header">
  <div class="g-label-inline">
    Cấu trúc
    <span class="en-inline">(Structure)
    </span>
  </div>
</div>

<div class="formula-content">

  <div>
    <span class="left">N / A</span>
    <span class="plus">+</span>
    <span class="right">です。</span>
  </div>

  <div>
    <span class="left">V</span>
    <span class="plus">+</span>
    <span class="right">ます。</span>
  </div>
  </div>
</div>

<!-- NOTE -->
<div class="note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

  <div class="vi-sub">• 「です」chỉ đi sau danh từ và tính từ.</div>
  <div class="en-sub">「です」is only used after nouns and adjectives.</div>

  <br>

  <div class="vi-sub">• Động từ dùng thể ます, không đi với 「です」.</div>
  <div class="en-sub">Verbs use ます form and do not combine with 「です」.</div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

  <div class="example-row">
    <div class="ex-num">1.</div>
    <div class="ex-content">
      <div class="jp-ex">
<ruby>私<rt>わたし</rt></ruby>は
<ruby>学生<rt>がくせい</rt></ruby>です。
      </div>
      <div class="vi-sub">Tôi là học sinh.</div>
      <div class="en-sub">I am a student.</div>
    </div>
  </div>

  <div class="example-row">
    <div class="ex-num">2.</div>
    <div class="ex-content">
      <div class="jp-ex">
        この<ruby>部屋<rt>へや</rt></ruby>は<ruby>静<rt>しず</rt>かです。
      </div>
      <div class="vi-sub">Phòng này thì yên tĩnh.</div>
      <div class="en-sub">This room is quiet.</div>
    </div>
  </div>

  <div class="example-row">
    <div class="ex-num">3.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>毎日<rt>まいにち</rt></ruby>7<ruby>時<rt>じ</rt></ruby>に
        <ruby>起<rt>お</rt></ruby>きます。
      </div>
      <div class="vi-sub">Tôi dậy lúc 7 giờ mỗi ngày.</div>
      <div class="en-sub">I wake up at 7 every day.</div>
    </div>
  </div>

</div>
`
,
2: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

  <div class="vi-sub">
    Diễn tả sự việc đã xảy ra trong quá khứ một cách lịch sự.
  </div>

  <div class="en-sub">
    Used to describe past events politely.
  </div>
</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

<div class="formula-content">

  <div>
    <span class="left">N / A</span>
    <span class="plus">+</span>
    <span class="right">でした。</span>
  </div>

  <div>
    <span class="left">V</span>
    <span class="plus">+</span>
    <span class="right">ました。</span>
  </div>
  </div>
</div>

<!-- NOTE -->
<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

  <div class="vi-sub">• でした dùng cho danh từ / tính từ.</div>
  <div class="en-sub">でした is used for nouns / adjectives.</div>

  <br>

  <div class="vi-sub">• ました dùng cho động từ.</div>
  <div class="en-sub"> ました is used for verbs.</div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

  <!-- 1 -->
  <div class="example-row">
    <div class="ex-num">1.</div>
    <div class="ex-content">
      <div class="jp-ex"><ruby>昨日<rt>きのう</rt></ruby>は<ruby>日曜日<rt>にちようび</rt></ruby>でした。</div>
      <div class="vi-sub">Hôm qua là Chủ nhật.</div>
      <div class="en-sub">Yesterday was Sunday.</div>
    </div>
  </div>

  <!-- 2 -->
  <div class="example-row">
    <div class="ex-num">2.</div>
    <div class="ex-content">
      <div class="jp-ex">その<ruby>映画<rt>えいが</rt></ruby>は<ruby>有名<rt>ゆうめい</rt>でした。</div>
      <div class="vi-sub">Bộ phim đó nổi tiếng.</div>
      <div class="en-sub">That movie was famous.</div>
    </div>
  </div>

  <!-- 3 -->
  <div class="example-row">
    <div class="ex-num">3.</div>
    <div class="ex-content">
      <div class="jp-ex">
      <ruby>昨日<rt>きのう</rt></ruby>すしを<ruby>食<rt>た</rt></ruby>べました。</div>
      <div class="vi-sub">Hôm qua tôi đã ăn sushi.</div>
      <div class="en-sub">I ate sushi yesterday.</div>
    </div>
  </div>

</div>
`
, 
3: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

<div class="vi-sub">
  Không phải... / Phải không...? (Phủ định hiện tại)
</div>
<div class="en-sub">
  Not... / Isn't it...? (present negative)
</div>

<div class="vi-sub">
  Diễn tả sự việc hoặc trạng thái không đúng.
</div>
<div class="en-sub">
  Used to say something is not true.
</div>
</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

<div class="formula-content">

  <div>
    <span class="left"> N / A<del>な</del></span>
    <span class="plus">+</span>
    <span class="right">じゃない</span>
  </div>

  <div>
    <span class="left"> A<del>い</del></span>
    <span class="plus">+</span>
    <span class="right">くない</span>
  </div>
</div>
</div>

<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

  <div class="vi-sub">• Dùng "じゃない" hoặc "くない" trong văn nói thân mật.</div>
  <div class="en-sub">Use "じゃない" or "くない" in casual speech.</div>

  <br>

  <div class="vi-sub">• Trong văn viết hoặc nói lịch sự nên thêm "です" phía sau.</div>
  <div class="en-sub">In polite writing or speech, add "です" at the end.</div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

  <div class="example-row">
    <div class="ex-num">1.</div>
    <div class="ex-content">
      <div class="jp-ex">
        この<ruby>町<rt>まち</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かじゃないです。
      </div>
      <div class="vi-sub">Thị trấn này không yên tĩnh.</div>
      <div class="en-sub">This town is not quiet.</div>
    </div>
  </div>

  <div class="example-row">
    <div class="ex-num">2.</div>
    <div class="ex-content">
      <div class="jp-ex">
        このりんごは<ruby>高<rt>たか</rt></ruby>くないです。
      </div>
      <div class="vi-sub">Quả táo này không đắt.</div>
      <div class="en-sub">This apple is not expensive.</div>
    </div>
  </div>

  <div class="example-row">
    <div class="ex-num">3.</div>
    <div class="ex-content">
      <div class="jp-ex">
        その<ruby>人<rt>ひと</rt>は<ruby>親切<rt>しんせつ</rt></ruby>じゃないです。
      </div>
      <div class="vi-sub">Người đó không tử tế.</div>
      <div class="en-sub">That person is not kind.</div>
    </div>
  </div>

</div>
`
, 
4: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

<div class="vi-sub">
  Không phải... / Phải không...? (Phủ định quá khứ )
</div>
<div class="en-sub">
  Not... / Isn't it...? (past negative)
</div>

<div class="vi-sub">
  Diễn tả sự việc hoặc trạng thái không đúng trong quá khứ.
</div>
<div class="en-sub">
  Used to say something was not true in the past.
</div>
</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

<div class="formula-content">

  <div>
    <span class="left"> N / A<del>な</del></span>
    <span class="plus">+</span>
    <span class="right">じゃなかった</span>
  </div>

  <div>
    <span class="left"> A<del>い</del></span>
    <span class="plus">+</span>
    <span class="right">くなかった</span>
  </div>
</div>
</div>

<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

  <div class="vi-sub">• Dùng "じゃない" hoặc "くない" trong văn nói thân mật.</div>
  <div class="en-sub">Use "じゃない" or "くない" in casual speech.</div>

  <br>

  <div class="vi-sub">• Trong văn viết hoặc nói lịch sự nên thêm "です" phía sau.</div>
  <div class="en-sub">In polite writing or speech, add "です" at the end.</div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

<!-- 1 -->
<div class="example-row">
  <div class="ex-num">1.</div>
  <div class="ex-content">
    <div class="jp-ex">
      <ruby>昨日<rt>きのう</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かじゃなかったです。
    </div>
    <div class="vi-sub">Hôm qua không yên tĩnh.</div>
    <div class="en-sub">It was not quiet yesterday.</div>
  </div>
</div>

<!-- 2 -->
<div class="example-row">
  <div class="ex-num">2.</div>
  <div class="ex-content">
    <div class="jp-ex">
      テストは<ruby>難<rt>むずか</rt></ruby>しくなかったです。
    </div>
    <div class="vi-sub">Bài kiểm tra không khó.</div>
    <div class="en-sub">The test was not difficult.</div>
  </div>
</div>

<!-- 3 -->
<div class="example-row">
  <div class="ex-num">3.</div>
  <div class="ex-content">
    <div class="jp-ex">
      <ruby>天気<rt>てんき</rt></ruby>は<ruby>良<rt>よ</rt></ruby>くなかったです。
    </div>
    <div class="vi-sub">Thời tiết không tốt.</div>
    <div class="en-sub">The weather was not good.</div>
  </div>
</div>

</div>
`
,
5: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

  <div class="vi-sub">
    Diễn tả sự tồn tại của người hoặc vật.
  </div>
  <div class="en-sub">
    Used to indicate the existence of people or things.
  </div>

</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

<div class="formula-content ">

  <div>
    <span class="left">N</span>
    <span class="plus">+</span>
    <span class="right">があります。</span>
  </div>
  <div>
    <span class="left">N</span>
    <span class="plus">+</span>
    <span class="right">がいます。</span>
  </div>
</div>
</div>

<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

  <div class="vi-sub">
    • Không có sự sống (vật, sự việc,...) dùng があります。
  </div>
  <div class="en-sub">
    Use があります for non-living things.
  </div>

  <br>

  <div class="vi-sub">
    • Có sự sống (người, động vật,...) dùng がいます。
  </div>
  <div class="en-sub">
    Use がいます for living things.
  </div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

  <!-- 1 -->
  <div class="example-row">
    <div class="ex-num">1.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>公園<rt>こうえん</rt></ruby>に<ruby>子<rt>こ</rt></ruby>どもがいます。
      </div>
      <div class="vi-sub">Ở công viên có trẻ con.</div>
      <div class="en-sub">There are children in the park.</div>
    </div>
  </div>

  <!-- 2 -->
  <div class="example-row">
    <div class="ex-num">2.</div>
    <div class="ex-content">
      <div class="jp-ex">
        つくえの<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>があります。
      </div>
      <div class="vi-sub">Trên bàn có quyển sách.</div>
      <div class="en-sub">There is a book on the desk.</div>
    </div>
  </div>

  <!-- 3 -->
  <div class="example-row">
    <div class="ex-num">3.</div>
    <div class="ex-content">
      <div class="jp-ex">
        うちに<ruby>犬<rt>いぬ</rt></ruby>がいます。
      </div>
      <div class="vi-sub">Nhà tôi có chó.</div>
      <div class="en-sub">I have a dog at home.</div>
    </div>
  </div>

</div>
`
,
6: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

  <div class="vi-sub">
    Diễn tả sự không tồn tại của người hoặc vật.
  </div>
  <div class="en-sub">
    Used to indicate that people or things do not exist.
  </div>

</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

<div class="formula-content">

  <div>
    <span class="left">N</span>
    <span class="plus">+</span>
    <span class="right">がありません。</span>
  </div>

  <div>
    <span class="left">N</span>
    <span class="plus">+</span>
    <span class="right">がいません。</span>
  </div>

</div>
</div>

<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

<div class="vi-sub">
  • Phủ định không có sự sống (vật, sự việc,...) dùng がありません。
</div>
<div class="en-sub">
  Use がありません to say that non-living things do not exist.
</div>

<br>

<div class="vi-sub">
  • Phủ định có sự sống (người, động vật,...) dùng がいません。
</div>
<div class="en-sub">
  Use がいません to say that living things do not exist.
</div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

  <!-- 1 -->
  <div class="example-row">
    <div class="ex-num">1.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>駅<rt>えき</rt></ruby>に<ruby>子<rt>こ</rt></ruby>どもがいません。
      </div>
      <div class="vi-sub">Ở nhà ga không có trẻ con.</div>
      <div class="en-sub">There are no children at the station.</div>
    </div>
  </div>

  <!-- 2 -->
  <div class="example-row">
    <div class="ex-num">2.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にペンがありません。
      </div>
      <div class="vi-sub">Trên bàn không có bút.</div>
      <div class="en-sub">There is no pen on the desk.</div>
    </div>
  </div>

  <!-- 3 -->
  <div class="example-row">
    <div class="ex-num">3.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>私<rt>わたし</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>に<ruby>猫<rt>ねこ</rt></ruby>がいません。
      </div>
      <div class="vi-sub">Nhà tôi không có mèo.</div>
      <div class="en-sub">I don’t have a cat at home.</div>
    </div>
  </div>

</div>
`
, 
7: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

  <div class="vi-sub">
    Diễn tả hành động đang diễn ra.
  </div>
  <div class="en-sub">
    Used to describe an action in progress.
  </div>

  <div class="vi-sub">
    Diễn tả trạng thái kéo dài (đã xảy ra và vẫn đang tiếp diễn).
  </div>
 <div class="en-sub">
  Used to describes a current state caused by a past action.
</div>
</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

  <div class="formula-content">
    Vて + います。
  </div>
</div>

<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

  <div class="vi-sub">
    • Một số động từ như 「住む」「知る」「結婚する」 thường dùng với 「～ています」 để chỉ trạng thái kéo dài.
  </div>
  <div class="en-sub">
     Some verbs like 「住む」「知る」「結婚する」 are typically used with 「～ています」 to indicate a continuing state, not a temporary action.
  </div>

  <br>

  <div class="vi-sub">
    • Không phải lúc nào 「～ています」 cũng mang nghĩa “đang làm”.
  </div>
  <div class="en-sub">
     「～ています」 does not always mean “doing something right now.”
  </div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

  <!-- 1 -->
  <div class="example-row">
    <div class="ex-num">1.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>今<rt>いま</rt></ruby>、<ruby>昼<rt>ひる</rt></ruby>ごはんを<ruby>食<rt>た</rt></ruby>べています。
      </div>
      <div class="vi-sub">Tôi đang ăn trưa.</div>
      <div class="en-sub">I’m eating lunch right now.</div>
    </div>
  </div>

  <!-- 2 -->
  <div class="example-row">
    <div class="ex-num">2.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>電車<rt>でんしゃ</rt></ruby>を<ruby>待<rt>ま</rt></ruby>っています。
      </div>
      <div class="vi-sub">Tôi đang đợi tàu.</div>
      <div class="en-sub">I’m waiting for the train.</div>
    </div>
  </div>

  <!-- 3 -->
  <div class="example-row">
    <div class="ex-num">3.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>東京<rt>とうきょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいます。
      </div>
      <div class="vi-sub">Tôi đang sống ở Tokyo.</div>
      <div class="en-sub">I live in Tokyo.</div>
    </div>
  </div>

</div>
`
,
8: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

<div class="vi-sub">
  Phủ định hành động đang diễn ra hoặc chưa xảy ra.
</div>
<div class="en-sub">
  Used to say an action is not happening or has not happened yet.
</div>
</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

  <div class="formula-content">
    Vて + いません。
  </div>
</div>

<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

  <div class="vi-sub">• Dùng để nói hành động chưa xảy ra tính đến hiện tại.</div>
  <div class="en-sub">Used to indicate an action has not happened yet (up to now).</div>

  <br>

<div class="vi-sub">• Không dùng cho phủ định trong quá khứ.</div>
<div class="en-sub">Not used for past actions.</div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

<!-- 1 -->
<div class="example-row">
  <div class="ex-num">1.</div>
  <div class="ex-content">
    <div class="jp-ex">
      今、<ruby>何<rt>なに</rt></ruby>もしていません。
    </div>
    <div class="vi-sub">Bây giờ tôi không làm gì cả.</div>
    <div class="en-sub">I'm not doing anything right now.</div>
  </div>
</div>

<!-- 2 -->
<div class="example-row">
  <div class="ex-num">2.</div>
  <div class="ex-content">
    <div class="jp-ex">
      まだ<ruby>食<rt>た</rt></ruby>べていません。
    </div>
    <div class="vi-sub">Tôi vẫn chưa ăn.</div>
    <div class="en-sub">I haven't eaten yet.</div>
  </div>
</div>

<!-- 3 -->
<div class="example-row">
  <div class="ex-num">3.</div>
  <div class="ex-content">
    <div class="jp-ex">
      <ruby>宿題<rt>しゅくだい</rt></ruby>をしていません。
    </div>
    <div class="vi-sub">Tôi chưa làm bài tập.</div>
    <div class="en-sub">I haven't done my homework.</div>
  </div>
</div>

</div>
`
,
9: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

  <div class="vi-sub">
    Diễn tả hành động đang diễn ra tại một thời điểm trong quá khứ.
  </div>
  <div class="en-sub">
    Describes an action that was in progress at a specific time in the past.
  </div>

</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

  <div class="formula-content">
    Vて + いました。
  </div>
</div>

<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

<div class="vi-sub">
  • Khác với「～ました」(dùng để nói về hành động đã xảy ra), 「～ていました」nhấn mạnh vào quá trình hoặc trạng thái đang tiếp diễn trong quá khứ.
</div>
<div class="en-sub">
  Unlike 「～ました」, which simply states a completed action, 「～ていました」emphasizes an ongoing action or state in the past.
</div>

</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

  <!-- 1 -->
  <div class="example-row">
    <div class="ex-num">1.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>昨日<rt>きのう</rt></ruby>テレビを<ruby>見<rt>み</rt></ruby>ていました。
      </div>
      <div class="vi-sub">Hôm qua tôi đang xem TV.</div>
      <div class="en-sub">I was watching TV yesterday.</div>
    </div>
  </div>

  <!-- 2 -->
  <div class="example-row">
    <div class="ex-num">2.</div>
    <div class="ex-content">
      <div class="jp-ex">
        そのとき、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでいました。
      </div>
      <div class="vi-sub">Lúc đó tôi đang đọc sách.</div>
      <div class="en-sub">I was reading a book at that time.</div>
    </div>
  </div>

  <!-- 3 -->
  <div class="example-row">
    <div class="ex-num">3.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>子<rt>こ</rt></ruby>どものとき、<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいました。
      </div>
      <div class="vi-sub">Khi còn nhỏ, tôi đã sống ở Nhật.</div>
      <div class="en-sub">I used to live in Japan when I was a child.</div>
    </div>
  </div>

</div>
`
,
10: `
<!-- Ý NGHĨA -->
<div class="g-block meaning">
  <div class="g-header">
    <div class="g-label">Ý nghĩa</div>
    <div class="g-sub-inline">(Meaning)</div>
  </div>

  <div class="vi-sub">
    Diễn tả trải nghiệm trong quá khứ, không nói rõ thời gian cụ thể.
  </div>
  <div class="en-sub">
    Describes past experiences without specifying a particular time.
  </div>

</div>

<!-- CẤU TRÚC -->
<div class="g-block formula">
  <div class="formula-header">
    <div class="g-label-inline">
      Cấu trúc
      <span class="en-inline">(Structure)</span>
    </div>
  </div>

  <div class="formula-content">
    Vた + ことがあります。
  </div>
</div>

<!-- NOTE -->
<div class="g-block note">
  <div class="g-header">
    <div class="g-label">Lưu ý</div>
    <div class="g-sub-inline">(Note)</div>
  </div>

<div class="vi-sub">
  Không dùng với mốc thời gian cụ thể. Ví dụ “昨日、行ったことがあります” là sai, vì 「たことがあります」 dùng để nói về kinh nghiệm từng trải qua, không dùng cho hành động xảy ra tại một thời điểm xác định.
</div>
<div class="en-sub">
  It is not used with specific time expressions. For example, “昨日、行ったことがあります” is incorrect because 「たことがあります」 expresses past experience, not an action that occurred at a specific point in time.
</div>
</div>

<!-- VÍ DỤ -->
<div class="g-block example-wrap">

<button class="furi-toggle" onclick="toggleFurigana(this, event)">OFF</button>

  <div class="g-header">
    <div class="g-label">Ví dụ</div>
    <div class="g-sub-inline">(Examples)</div>
  </div>

  <!-- 1 -->
  <div class="example-row">
    <div class="ex-num">1.</div>
    <div class="ex-content">
      <div class="jp-ex">
        すしを<ruby>食<rt>た</rt></ruby>べたことがあります。
      </div>
      <div class="vi-sub">Tôi đã từng ăn sushi.</div>
      <div class="en-sub">I've eaten sushi before.</div>
    </div>
  </div>

  <!-- 2 -->
  <div class="example-row">
    <div class="ex-num">2.</div>
    <div class="ex-content">
      <div class="jp-ex">
        <ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったことがあります。
      </div>
      <div class="vi-sub">Tôi đã từng đến Nhật.</div>
      <div class="en-sub">I've been to Japan before.</div>
    </div>
  </div>

  <!-- 3 -->
  <div class="example-row">
    <div class="ex-num">3.</div>
    <div class="ex-content">
      <div class="jp-ex">
        カラオケに<ruby>行<rt>い</rt></ruby>ったことがありますか？
      </div>
      <div class="vi-sub">Bạn đã từng đi karaoke chưa?</div>
      <div class="en-sub">Have you ever been to karaoke?</div>
    </div>
  </div>

</div>
`
};
