import * as React from "react";

/**
 * Hook personnalisé qui permet de réagir aux media queries CSS
 * @param query - La media query CSS à surveiller (ex: "(min-width: 768px)")
 * @returns boolean - True si la media query correspond aux conditions actuelles, false sinon
 */
export function useMediaQuery(query: string) {
  // État local qui stocke si la media query correspond (true) ou non (false)
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    // Fonction appelée chaque fois que le statut de la media query change
    function onChange(event: MediaQueryListEvent) {
      // Met à jour l'état avec la nouvelle correspondance
      setValue(event.matches);
    }

    // Crée un objet MediaQueryList pour surveiller la media query
    const result = matchMedia(query);
    
    // Ajoute un écouteur d'événements pour détecter les changements
    // Par exemple, quand l'utilisateur redimensionne la fenêtre
    result.addEventListener("change", onChange);
    
    // Définit la valeur initiale
    setValue(result.matches);

    // Fonction de nettoyage appelée quand le composant est démonté
    // ou quand la query change
    return () => result.removeEventListener("change", onChange);
  }, [query]); // Relance l'effet si la query change

  // Renvoie true si la media query correspond, false sinon
  return value;
}