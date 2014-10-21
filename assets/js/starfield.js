/**
 * Starfield
 * @author Valentin Perez
 * based on particlefield and starfield from @mrjnicol and @chenye respectively.
 *
 */

var particles_on;

$(document).ready(function() {
    if( $(window).width() <= 768 )
    { 
    // is mobile or tablet so don't show particles.. (too big and messes up layout)
    }
    else
    {
      $('#starfield').particleground({
        dotColor: '#DDDDDD',
        lineColor: 'rgba(255, 255, 255, .2)',
        particleRadius: 4,
        paralaxMultiplier: 6,
        proximity: 75,
        minRadiusPct: .5,
        maxRadiusPct: 2.2,
        minOpacity: .5,
        maxOpacity: .8
      });
      particles_on = true;
    }
});

$(window).resize(function() {
  //resize just happened, pixels changed
  if($(window).width() <= 768)
    { 
    particles_on = false;
    // is mobile so don't show particles..
    $('#starfield').particleground('destroy');
    }
    else
    {
        if(!particles_on)
        {
            $('#starfield').particleground({
                dotColor: '#DDDDDD',
                lineColor: 'rgba(255, 255, 255, .2)',
                particleRadius: 4,
                paralaxMultiplier: 6,
                proximity: 75,
                minRadiusPct: .5,
                maxRadiusPct: 2.2,
                minOpacity: .5,
                maxOpacity: .8
              });
                          particles_on = true;

        }
    }
});