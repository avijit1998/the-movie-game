import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL,import.meta.env.VITE_SUPABASE_KEY);

async function updateRecordsAndReturnPct(movieName, choice, selectedOpt, otherMovieName) {
  const { count, error } = await supabase
    .from('movies_opinions')
    .select('*', { count: 'exact', head: true })
    .filter('movie_tmdb_name','eq',movieName);

    let name = '';
    if(count === 0){
      const { data, error } = await supabase.from('movies_opinions').insert([{ movie_tmdb_name: movieName },]).select();
      name = await data[0].movie_tmdb_name;
    }
    else if(count > 0) {
      name = movieName;
    }

    let optUpdFlag = '';
    if(name.length > 0 && choice > 0 && choice === selectedOpt){
      const { data, error } = await supabase.rpc('increment_value', { movie_name: name, increment_by: 1 });
      optUpdFlag = await data;
    }

    if(optUpdFlag.length > 0){
      const { data, error } = await supabase
        .from('movies_opinions')
        .select('movie_tmdb_name, happy_choice')
        .in('movie_tmdb_name', [movieName, otherMovieName]);

      let happyChoiceMv1 = 0;
      let happyChoiceMv2 = 0;
      let percentage = 0;
      if(data[0] === movieName){
        happyChoiceMv1 = await data[0].happy_choice;
        happyChoiceMv2 = await data[1].happy_choice;
      } else {
        happyChoiceMv1 = await data[1].happy_choice;
        happyChoiceMv2 = await data[0].happy_choice;
      }

      if(happyChoiceMv1 > 0 && happyChoiceMv2 > 0){
        percentage = happyChoiceMv1 / (happyChoiceMv1 + happyChoiceMv2);
        percentage = percentage * 100;
      }
      return 'Approximately ' + Math.round(percentage) + '% of people agree with your choice, ' + movieName;
    }

    return '';
}

export {updateRecordsAndReturnPct};


    