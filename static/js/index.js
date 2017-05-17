
$( document ).ready(function(){

})

function elma(xxx){
  var games = [];
  var labels=[];
  var total_like=[];
  var total_dislike=[];
  var ids=[];
  var poz=[];
  var poz_plus=[];
  var neg=[];
  var neg_plus=[];
  var none_s=[];
  var neutral=[];
  var total_view=[];
  var total_comment=[];
   $.getJSON( "http://kbora.xyz/fetch-all-fish.php?game_name=" + xxx, function( data ) {
      data.game_name.forEach(function (elem) {
        games.push({
          value: elem.game_name,
          data: elem.fish_id,
          data1:elem.catName
        });
        labels.push(elem.game_name)
        total_like.push(elem.total_like)
        total_dislike.push(elem.total_dislike)
        poz.push(elem.poz)
        poz_plus.push(elem.poz_plus)
        neg.push(elem.neg)
        neg_plus.push(elem.neg_plus)
        none_s.push(elem.none)
        neutral.push(elem.neutral)
        ids.push(elem.star)
        total_view.push(elem.total_view)
        total_comment.push(elem.total_comment)
      });

////////////////////////Total comment/////////////////////////////////////
//      var ctx = document.getElementById("myChart").getContext('2d');
//       var myChart = new Chart(ctx, {
//         type: 'radar',
//         data: {
//           labels: [''],
//           datasets: [
//               {label: 'Total Comment',data: total_comment,backgroundColor: "rgba(153,255,51,1)"},
//               {label: 'Total View',data: total_view,backgroundColor: "rgba(70, 156, 53, 1)"},
//           ]
//         }
//       });
////////////////////////Total comment/////////////////////////////////////
	var ctx = document.getElementById("myChart2").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
              {label: 'Total Comment',data: total_comment,backgroundColor: "rgba(153,255,51,1)"},
               {label: 'Total View',data: total_view,backgroundColor: "rgba(70, 156, 53, 1)"}
              ]
        }
      });
////////////////////////Sentimental analiz/////////////////////////////////////
      var ctx = document.getElementById("myChart3").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
              {label: 'Positive',data: poz,backgroundColor: "rgba(153,255,51,1)"},
              {label: 'Positive Plus',data: poz_plus,backgroundColor: "rgba(70, 156, 53, 1)"},
              {label: 'Negative',data: neg,backgroundColor: "rgba(53, 156, 149, 1)"},
              {label: 'Negative Plus',data: neg_plus,backgroundColor: "rgba(67, 142, 137, 1)"},
              {label: 'None',data: none_s,backgroundColor: "rgba(229, 161, 236, 0.7)"},
              {label: 'Neutral',data: neutral,backgroundColor: "rgba(64, 172, 191, 0.59)"}
          ]
        }
      });
///////////////////////////////////////////////////////////////////////////////
//           var ctx = document.getElementById("myChart5").getContext('2d');
//       var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels: labels,
//           datasets: [
//               {label: 'Positive',data: poz,backgroundColor: "rgba(153,255,51,1)"},
//               {label: 'Positive Plus',data: poz_plus,backgroundColor: "rgba(70, 156, 53, 1)"},
//               {label: 'Negative',data: neg,backgroundColor: "rgba(53, 156, 149, 1)"},
//               {label: 'Negative Plus',data: neg_plus,backgroundColor: "rgba(67, 142, 137, 1)"},
//               {label: 'None',data: none_s,backgroundColor: "rgba(229, 161, 236, 0.7)"},
//               {label: 'Neutral',data: neutral,backgroundColor: "rgba(64, 172, 191, 0.59)"}
//           ]
//         }
//       });




///////////////////////Total like and dislike///////////////////////////////////
      var ctx = document.getElementById("myChart1").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Total Like',
            data: total_like,
            backgroundColor: "rgba(153,255,51,1)"
          }, {
            label: 'Total Dislike',
            data: total_dislike,
            backgroundColor: "rgba(255,153,0,1)"
          }]
        }
      });
////////////////////////////////////////////////////////////////////////////
  });

}